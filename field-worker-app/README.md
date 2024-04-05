# Health Field Worker App

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
</p>

## 🚀 How to use

> `npx create-react-native-app my-app -t with-reanimated`

- Run `yarn` or `npm install`
- Run `yarn start` or `npm run start` to try it out.

- Run `eas build -p android --profile preview` to build Android-Tablet-APK

## 📝 Notes

- [`react-native-reanimated` docs](https://docs.swmansion.com/react-native-reanimated/)

## AsyncStorage Keys

```md
1. FieldWorkerId
2. FieldWorkerName
3. AccessToken
4. Language
5. uploadData
```

## Download Region Data Format

```js
data = {
  "field-worker-details": {
    "field-worker-assigned-sector": 7
  },
  "follow-up": [
    {
      "follow-up-id": 1,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345678",
      "visited-status": false 
    },
    {
      "follow-up-id": 2,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345677",
      "visited-status": false 
    }
  ],

  "patient-details": [
    {
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100", 
      "patient-abhaid": "1234567812345678",
      "ongoing-medication-orders": {
        "ICD10-code": "F90.0",
        "doctor-name": "Abhishek Gupta 1",
        "doctor-comment": "Abhishek lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "questionnaire-type": "default"
      },   
      "recent-3-prescriptions": [
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-1 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "doctor-name":"Aakash Bhardwaj 1"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-2 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "13-05-2014",
        "doctor-name":"Aakash Bhardwaj 2"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-3 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "14-05-2014",
        "doctor-name":"Aakash Bhardwaj 3"
        }
    ]
    }, {
      "fieldworker-id": 1234,
      "patient-name": "Rushikesh Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100", 
      "patient-abhaid": "1234567812345677",
      "ongoing-medication-orders": {
        "ICD10-code": "F90.0",
        "doctor-name": "Rushikesh Gupta 2",
        "doctor-comment": "Abhishek lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "questionnaire-type": "default"
      },   
      "recent-3-prescriptions": [
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-1 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "12-05-2014",
        "doctor-name":"Aakash Bhardwaj 1"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-2 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "13-05-2014",
        "doctor-name":"Aakash Bhardwaj 2"
        }, 
        {
        "ICD10-code": "F90.0",
        "prescription": "prescription-3 lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it. Lorem Ipsum is Lore than others who receive it and is Lore than others who receive it and is Lore than others who receive it",
        "date": "14-05-2014",
        "doctor-name":"Aakash Bhardwaj 3"
        }
    ]
    }
  ],
  "doctors": [
    {
      "doctor-id": 1,
      "doctor-name": "Abhishek Gupta",
      "open-slots": 12
    },
    {
      "doctor-id": 2,
      "doctor-name": "Aakash Bhardwaj",
      "open-slots": 1
    },
    {
      "doctor-id": 3,
      "doctor-name": "Ajay Gupta",
      "open-slots": 1
    },
    {
      "doctor-id": 4,
      "doctor-name": "Guru Bhardwaj",
      "open-slots": 10
    }
  ],

  "questionnaire": [
        {
            "icd10": "ACTIVITY",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 23,
                    "question_text": "In the last 1 month, kept eating something more than necessary just because it tasted so good",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 24,
                    "question_text": "In the last 1 month, spent time thinking constructively about ways to improve myself/my relationship with important person/s in my life",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 25,
                    "question_text": "In the last 1 month, went to party just to have a good time",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 26,
                    "question_text": "In the last 1 month, made my living space/work space cleaner and better organized, out of my own choice",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 27,
                    "question_text": "In the last 1 month, did something to help someone without expecting anything in return",
                    "option": 1
                }
            ]
        },
        {
            "icd10": "DISTRESS",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 11,
                    "question_text": "During the last 30 days, about how often did you feel tired out for no good reason?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 12,
                    "question_text": "During the last 30 days, about how often did you feel nervous?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 13,
                    "question_text": "During the last 30 days, about how often did you feel so nervous that nothing could calm you down?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 14,
                    "question_text": "During the last 30 days, about how often did you feel worthless?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 15,
                    "question_text": "During the last 30 days, about how often did you feel that everything was an effort?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 16,
                    "question_text": "During the last 30 days, about how often did you feel restless or fidgety?",
                    "option": 1
                }
            ]
        },
        {
            "icd10": "EMOTION",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 6,
                    "question_text": "In the last few weeks I have felt that I have little or no interest in things around me",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 7,
                    "question_text": "In the last few weeks I have felt irritated by something",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 8,
                    "question_text": "In the last few weeks I have felt sharp and attentive",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 9,
                    "question_text": "In the last few weeks I have felt that things are dull and boring",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 10,
                    "question_text": "In the last few weeks I have felt guilty about something that I have done or said",
                    "option": 1
                }
            ]
        },
        {
            "icd10": "F31.0",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 35,
                    "question_text": "How often do you engage in risky behaviors during manic episodes?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 36,
                    "question_text": "How often do you have difficulty concentrating or making decisions during manic episodes?",
                    "option": 1
                },
                {
                    "ques_type": "text",
                    "question_id": 47,
                    "question_text": "Do you experience periods of abnormally elevated mood or irritability?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 48,
                    "question_text": "Do you experience a decreased need for sleep during manic episodes?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 49,
                    "question_text": "Do you feel overly optimistic or grandiose during manic episodes?",
                    "option": 0
                }
            ]
        },
        {
            "icd10": "F32.1",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 37,
                    "question_text": "How frequently do you experience changes in appetite or weight?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 38,
                    "question_text": "How often do you feel tired or have low energy most days?",
                    "option": 1
                },
                {
                    "ques_type": "text",
                    "question_id": 50,
                    "question_text": "Do you often feel sad, empty, or hopeless?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 51,
                    "question_text": "Have you lost interest or pleasure in activities you used to enjoy?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 52,
                    "question_text": "Do you have trouble sleeping or sleeping too much?",
                    "option": 0
                }
            ]
        },
        {
            "icd10": "F40.01",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 33,
                    "question_text": "How often do you avoid certain places or situations because they cause fear or anxiety?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 34,
                    "question_text": "How often do you worry excessively about different things?",
                    "option": 1
                },
                {
                    "ques_type": "text",
                    "question_id": 44,
                    "question_text": "Do you often feel nervous, anxious, or on edge?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 45,
                    "question_text": "Do you experience sudden feelings of terror or panic?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 46,
                    "question_text": "Do you experience physical symptoms such as trembling, sweating, or palpitations?",
                    "option": 0
                }
            ]
        },
        {
            "icd10": "F43.21",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 31,
                    "question_text": "How frequently do you feel constantly overwhelmed or stressed?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 32,
                    "question_text": "How often do you experience changes in sleep patterns or appetite?",
                    "option": 1
                },
                {
                    "ques_type": "text",
                    "question_id": 41,
                    "question_text": "Have you experienced significant changes in your life recently?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 42,
                    "question_text": "Do you often feel sad or hopeless?",
                    "option": 0
                },
                {
                    "ques_type": "text",
                    "question_id": 43,
                    "question_text": "Do you have difficulty concentrating or making decisions?",
                    "option": 0
                }
            ]
        },
        {
            "icd10": "F90.0",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 28,
                    "question_text": "How often do you feel restless or unable to sit still?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 29,
                    "question_text": "How frequently do you lose things necessary for tasks or activities?",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 30,
                    "question_text": "How often do you feel a need to keep moving or fidgeting?",
                    "option": 1
                },
                {
                    "ques_type": "text",
                    "question_id": 39,
                    "question_text": "Do you often have trouble paying attention to details or making careless mistakes in your work or other activities?",
                    "option": 0
                },
                {
                    "ques_type": "nat",
                    "question_id": 40,
                    "question_text": "Do you often interrupt others or intrude on conversations or games?",
                    "option": 0
                }
            ]
        },
        {
            "icd10": "PSYCHO",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 1,
                    "question_text": "I have a sense of direction and purpose in life.",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 2,
                    "question_text": "I gave up trying to make big improvements or changes in my life a long time ago.",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 3,
                    "question_text": "I feel that I get a lot out of my friendships.",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 4,
                    "question_text": "I have difficulty organizing my life in a way that is satisfying to me.",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 5,
                    "question_text": "In many ways, I feel disappointed about my achievements in life.",
                    "option": 1
                }
            ]
        },
        {
            "icd10": "SOCIAL",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 17,
                    "question_text": "I think the world is becoming a better place to live",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 18,
                    "question_text": "I do not feel connected to the society",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 19,
                    "question_text": "I think society has the potential for positive changes",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 20,
                    "question_text": "I believe that the society can become a better place",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 21,
                    "question_text": "I feel I am accepted by other people",
                    "option": 1
                },
                {
                    "ques_type": "mcq",
                    "question_id": 22,
                    "question_text": "I feel a sense of belongingness to society",
                    "option": 1
                }
            ]
        }
    ]
}
```


## Upload Data Format

```js
data = {
  // for follow-up-status
  "follow-up": [
    {
      "follow-up-id": 1,
      "patient-id": 123,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345678",
      "visited-status": true 
    },
    {
      "follow-up-id": 2,
      "patient-id": 124,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100",
      "patient-token": "123",
      "patient-abhaid": "1234567812345678",
      "visited-status": true 
    }
  ],
  // docters slots remaining
  "doctors": [
    {
      "doctor-id": 1,
      "doctor-name": "Abhishek Gupta",
      "open-slots": 2
    },
    {
      "doctor-id": 2,
      "doctor-name": "Aakash Bhardwaj",
      "open-slots": 1
    },
    {
      "doctor-id": 3,
      "doctor-name": "Ajay Gupta",
      "open-slots": 1
    },
    {
      "doctor-id": 4,
      "doctor-name": "Guru Bhardwaj",
      "open-slots": 10
    }
  ],

  "questionnaire-response": [
    {
      "patient-abhaid": "1234456715344821",
      "questionnaire-type": "default",
      "responses": [{"question-id": 1, "response": "not at all"}]
    }
  ],

  "fieldworker-comments": [
    {
      "patient-abhaid": "1234456715344821",
      "comment": "xyz",
      "date": "12-05-2014"
    }
  ],

  "artifacts": [
  {
    "patient-abhaid": "1234456715344821",
    "date": "12-05-2014",
    "object": "0b0101101",
  },
  {
    "patient-abhaid": "1234456715344821",
    "date": "12-05-2014",
    "object": "0b0101101",
  },
],

  "chosen-doctor": [
    {
      "doctor-id": 1,
      "patient-abhaid": "1234456715344821",
    }
  ]

  "patient-registeration": [
    {
        "fieldworker-id": 1234,
        "patient-name": "Abhishek Gupta",
        "patient-dob": "12-05-2000",
        "patient-gender": "Male",
	"patient-abhaid": "1234567812345678",
	"patient-phoneNumber": "1234567891",
	"patient-address": "xyz",
	"patient-blockCode": "1",
	"patient-pincode": "123456",
	"patient-preferred-langauge": "English",
    }
  ]
}
```




