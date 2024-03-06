const QUESTIONS_API_RESPONSE = `[
  {
      "id": "sign-up-form",
      "name": "Sign-Up Form",
      "category": "HTML"
  },
  {
      "id": "item-cart",
      "name": "Item Cart",
      "category": "HTML"
  },
  {
      "id": "spaghetti-recipe",
      "name": "Spaghetti Recipe",
      "category": "HTML"
  },
  {
      "id": "blog-post",
      "name": "Blog Post",
      "category": "HTML"
  },
  {
      "id": "rainbow-circles",
      "name": "Rainbow Circles",
      "category": "CSS"
  },
  {
      "id": "navbar",
      "name": "Navbar",
      "category": "CSS"
  },
  {
      "id": "pig-emoji",
      "name": "Pig Emoji",
      "category": "CSS"
  },
  {
      "id": "purchase-form",
      "name": "Purchase Form",
      "category": "CSS"
  },
  {
      "id": "algoexpert-products",
      "name": "AlgoExpert Products",
      "category": "CSS"
  },
  {
      "id": "testing-framework",
      "name": "Testing Framework",
      "category": "JavaScript"
  },
  {
      "id": "array-methods",
      "name": "Array Methods",
      "category": "JavaScript"
  },
  {
      "id": "event-target",
      "name": "Event Target",
      "category": "JavaScript"
  },
  {
      "id": "debounce",
      "name": "Debounce",
      "category": "JavaScript"
  },
  {
      "id": "this-binding",
      "name": "This Binding",
      "category": "JavaScript"
  },
  {
      "id": "promisify",
      "name": "Promisify",
      "category": "JavaScript"
  },
  {
      "id": "throttle",
      "name": "Throttle",
      "category": "JavaScript"
  },
  {
      "id": "curry",
      "name": "Curry",
      "category": "JavaScript"
  },
  {
      "id": "infinite-scroll",
      "name": "Infinite Scroll",
      "category": "DOM Manipulation"
  },
  {
      "id": "stopwatch",
      "name": "Stopwatch",
      "category": "DOM Manipulation"
  },
  {
      "id": "tic-tac-toe",
      "name": "Tic Tac Toe",
      "category": "DOM Manipulation"
  },
  {
      "id": "todo-list",
      "name": "Todo List",
      "category": "DOM Manipulation"
  },
  {
      "id": "typeahead",
      "name": "Typeahead",
      "category": "DOM Manipulation"
  },
  {
      "id": "tier-list",
      "name": "Tier List",
      "category": "DOM Manipulation"
  },
  {
      "id": "toasts",
      "name": "Toasts",
      "category": "DOM Manipulation"
  },
  {
      "id": "sudoku",
      "name": "Sudoku",
      "category": "DOM Manipulation"
  },
  {
      "id": "questions-list",
      "name": "Questions List",
      "category": "DOM Manipulation"
  }
]`

const SUBMISSIONS_API_RESPONSE = `[
  {
      "questionId": "blog-post",
      "status": "CORRECT"
  },
  {
      "questionId": "throttle",
      "status": "INCORRECT"
  },
  {
      "questionId": "stopwatch",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "pig-emoji",
      "status": "CORRECT"
  },
  {
      "questionId": "todo-list",
      "status": "CORRECT"
  },
  {
      "questionId": "testing-framework",
      "status": "CORRECT"
  },
  {
      "questionId": "array-methods",
      "status": "INCORRECT"
  },
  {
      "questionId": "spaghetti-recipe",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "algoexpert-products",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "curry",
      "status": "CORRECT"
  },
  {
      "questionId": "toasts",
      "status": "INCORRECT"
  },
  {
      "questionId": "tic-tac-toe",
      "status": "CORRECT"
  },
  {
      "questionId": "event-target",
      "status": "CORRECT"
  },
  {
      "questionId": "debounce",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "item-cart",
      "status": "CORRECT"
  },
  {
      "questionId": "typeahead",
      "status": "CORRECT"
  },
  {
      "questionId": "tier-list",
      "status": "PARTIALLY_CORRECT"
  },
  {
      "questionId": "sudoku",
      "status": "CORRECT"
  },
  {
      "questionId": "rainbow-circles",
      "status": "INCORRECT"
  },
  {
      "questionId": "infinite-scroll",
      "status": "CORRECT"
  },
  {
      "questionId": "navbar",
      "status": "PARTIALLY_CORRECT"
  }
]`

const fetchQuestionsAndSubmissions = async () => {
  const [questions, submissions] = [JSON.parse(QUESTIONS_API_RESPONSE), JSON.parse(SUBMISSIONS_API_RESPONSE)]

  return [questions, submissions]
}

const groupQuestionsByCategory = (questions, submissions) => {
  const questionsGrouped = {}
  const submissionsById = {}

  submissions.forEach(submission => {
    submissionsById[submission.questionId] = submission.status
  })

  questions.forEach(question => {
    const questionWithStatus = {...question, status: submissionsById[question.id]}

    if (questionsGrouped.hasOwnProperty(question.category)) {
      questionsGrouped[question.category].push(questionWithStatus)
    } else {
      questionsGrouped[question.category] = [questionWithStatus]
    }
  })

  return questionsGrouped
}

const renderQuestionsAndCategory = (category, questions) => {
  let questionsCorrect = 0

  const wrapper = document.querySelector('#wrapper')

  const categoryDiv = document.createElement('div')
  categoryDiv.classList.add('category')

  const categoryTitle = document.createElement('h2')

  questions.forEach(question => {
    const questionDiv = document.createElement('div')
    questionDiv.classList.add('question')

    if (question.status) {
      if (question.status === 'CORRECT') {
        questionsCorrect += 1
      }

      const statusDiv = document.createElement('div')
      const statusClass = question.status.toLowerCase().replace('_', '-')
      statusDiv.classList.add('status', statusClass)
      questionDiv.append(statusDiv)
    }

    const questionTitle = document.createElement('h3')
    questionTitle.innerText = question.name

    questionDiv.append(questionTitle)
    categoryDiv.append(questionDiv)
  })

  categoryTitle.innerText = `${category} - ${questionsCorrect}/${questions.length}`
  categoryDiv.prepend(categoryTitle)

  wrapper.append(categoryDiv)
}

const fetchAndRenderQuestions = async () => {
  const [questionsResponse, submissionsResponse] = await fetchQuestionsAndSubmissions()
  const groupedQuestions = groupQuestionsByCategory(questionsResponse, submissionsResponse)
  
  for ([category, questions] of Object.entries(groupedQuestions)) {
    renderQuestionsAndCategory(category, questions)
  }
}

fetchAndRenderQuestions()