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
      "patient-name": "James Bhardwaj",
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
      "patient-name": "James Bhardwaj",
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
            "icd10": "F32.1",
            "questions": [
                {
                    "ques_type": "mcq",
                    "question_id": 23,
                    "question_text": "In the last 1 month, kept eating something more than necessary just because it tasted so good",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "nat",
                    "question_id": 24,
                    "question_text": "In the last 1 month, spent time thinking constructively about ways to improve myself/my relationship with important person/s in my life",
                },
                {
                    "ques_type": "text",
                    "question_id": 25,
                    "question_text": "In the last 1 month, went to party just to have a good time",
                },
                {
                    "ques_type": "mcq",
                    "question_id": 26,
                    "question_text": "In the last 1 month, made my living space/work space cleaner and better organized, out of my own choice",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 27,
                    "question_text": "In the last 1 month, did something to help someone without expecting anything in return",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 12,
                    "question_text": "During the last 30 days, about how often did you feel nervous?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 13,
                    "question_text": "During the last 30 days, about how often did you feel so nervous that nothing could calm you down?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 14,
                    "question_text": "During the last 30 days, about how often did you feel worthless?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 15,
                    "question_text": "During the last 30 days, about how often did you feel that everything was an effort?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 16,
                    "question_text": "During the last 30 days, about how often did you feel restless or fidgety?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 7,
                    "question_text": "In the last few weeks I have felt irritated by something",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 8,
                    "question_text": "In the last few weeks I have felt sharp and attentive",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 9,
                    "question_text": "In the last few weeks I have felt that things are dull and boring",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 10,
                    "question_text": "In the last few weeks I have felt guilty about something that I have done or said",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 36,
                    "question_text": "How often do you have difficulty concentrating or making decisions during manic episodes?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 38,
                    "question_text": "How often do you feel tired or have low energy most days?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 34,
                    "question_text": "How often do you worry excessively about different things?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 32,
                    "question_text": "How often do you experience changes in sleep patterns or appetite?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 29,
                    "question_text": "How frequently do you lose things necessary for tasks or activities?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 30,
                    "question_text": "How often do you feel a need to keep moving or fidgeting?",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 2,
                    "question_text": "I gave up trying to make big improvements or changes in my life a long time ago.",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 3,
                    "question_text": "I feel that I get a lot out of my friendships.",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 4,
                    "question_text": "I have difficulty organizing my life in a way that is satisfying to me.",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 5,
                    "question_text": "In many ways, I feel disappointed about my achievements in life.",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 18,
                    "question_text": "I do not feel connected to the society",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 19,
                    "question_text": "I think society has the potential for positive changes",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 20,
                    "question_text": "I believe that the society can become a better place",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 21,
                    "question_text": "I feel I am accepted by other people",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 22,
                    "question_text": "I feel a sense of belongingness to society",
                    "option": ["option-1", "option-2", "option-3", "option-4"]
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

```
 {
    "patientDetails": [
        {
            "patient_abhaid": "1",
            "fieldworker_id": 0,
            "patient_name": "John Doe",
            "patient_address": "1234 Main St",
            "ongoing_medication_orders": null,
            "prescriptions": [
                {
                    "disease_name": "abc",
                    "prescription": "no",
                    "date": "2024-04-12",
                    "doctor_name": "John Doe"
                }
            ],
            "accessible": true
        },
        {
            "patient_abhaid": "2",
            "fieldworker_id": 1,
            "patient_name": "Jane Smith",
            "patient_address": "5678 Broadway Ave",
            "ongoing_medication_orders": {
                "icd10_code": "F43.21",
                "doctor_name": "John Doe",
                "doctor_comment": "1234",
                "questionnaire_type": "F43.21",
                "date": "2024-04-12"
            },
            "prescriptions": [
                {
                    "disease_name": "cde",
                    "prescription": "yes",
                    "date": "2024-04-12",
                    "doctor_name": "John Doe"
                }
            ],
            "accessible": true
        },
        {
            "patient_abhaid": "3",
            "fieldworker_id": 1,
            "patient_name": "Jim Brown",
            "patient_address": "91011 Second St",
            "ongoing_medication_orders": {
                "icd10_code": "F90.0",
                "doctor_name": "John Doe",
                "doctor_comment": null,
                "questionnaire_type": "F90.0",
                "date": "2024-04-12"
            },
            "prescriptions": [],
            "accessible": true
        },
        {
            "patient_abhaid": "6",
            "fieldworker_id": 0,
            "patient_name": "Sophie Miller",
            "patient_address": "181920 Fifth St",
            "ongoing_medication_orders": null,
            "prescriptions": [],
            "accessible": true
        }
    ],
    "patientFollowUp": [
        {
            "follow_up_id": 1,
            "patient_name": "$2a$10$/qH8fMVFy5lMKkwjQY38ie9uxZjNVS8428niuB0DRQuniVd7kd2Ua",
            "patient_token": 9392,
            "patient_abhaid": "2",
            "patient_address": "5678 Broadway Ave",
            "visited_status": false,
            "patient_followupdate": "2024-04-12",
            "icd10": "F43.21"
        },
        {
            "follow_up_id": 2,
            "patient_name": "$2a$10$7vGoe5HK7bhaklHOVf/rR.5VmRWm8zBUqKhfpWmwFVVYuiejS209a",
            "patient_token": 3638,
            "patient_abhaid": "3",
            "patient_address": "91011 Second St",
            "visited_status": false,
            "patient_followupdate": "2024-04-12",
            "icd10": "F90.0"
        }
    ],
    "doctorCount": [
        {
            "doctor_id": 1,
            "doctor_name": "John Doe",
            "open_slots": 50,
            "workingAddress": "123 Main St, CityName",
            "specialization": "Specialization1"
        },
        {
            "doctor_id": 2,
            "doctor_name": "Jane Smith",
            "open_slots": 50,
            "workingAddress": "456 Market St, CityName",
            "specialization": "Specialization2"
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
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 24,
                    "question_text": "In the last 1 month, spent time thinking constructively about ways to improve myself/my relationship with important person/s in my life",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 25,
                    "question_text": "In the last 1 month, went to party just to have a good time",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 26,
                    "question_text": "In the last 1 month, made my living space/work space cleaner and better organized, out of my own choice",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 27,
                    "question_text": "In the last 1 month, did something to help someone without expecting anything in return",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
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
                    "option": [
                        "None of the time",
                        "A Little of the time",
                        "Some of the time",
                        "Most of the time",
                        "All of the time"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 12,
                    "question_text": "During the last 30 days, about how often did you feel nervous?",
                    "option": [
                        "None of the time",
                        "A Little of the time",
                        "Some of the time",
                        "Most of the time",
                        "All of the time"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 13,
                    "question_text": "During the last 30 days, about how often did you feel so nervous that nothing could calm you down?",
                    "option": [
                        "None of the time",
                        "A Little of the time",
                        "Some of the time",
                        "Most of the time",
                        "All of the time"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 14,
                    "question_text": "During the last 30 days, about how often did you feel worthless?",
                    "option": [
                        "None of the time",
                        "A Little of the time",
                        "Some of the time",
                        "Most of the time",
                        "All of the time"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 15,
                    "question_text": "During the last 30 days, about how often did you feel that everything was an effort?",
                    "option": [
                        "None of the time",
                        "A Little of the time",
                        "Some of the time",
                        "Most of the time",
                        "All of the time"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 16,
                    "question_text": "During the last 30 days, about how often did you feel restless or fidgety?",
                    "option": [
                        "None of the time",
                        "A Little of the time",
                        "Some of the time",
                        "Most of the time",
                        "All of the time"
                    ]
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
                    "option": [
                        "Extremely",
                        "Quite a bit",
                        "Moderately",
                        "A little",
                        "Very",
                        "Slightly or not at all"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 7,
                    "question_text": "In the last few weeks I have felt irritated by something",
                    "option": [
                        "Extremely",
                        "Quite a bit",
                        "Moderately",
                        "A little",
                        "Very",
                        "Slightly or not at all"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 8,
                    "question_text": "In the last few weeks I have felt sharp and attentive",
                    "option": [
                        "Extremely",
                        "Quite a bit",
                        "Moderately",
                        "A little",
                        "Very",
                        "Slightly or not at all"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 9,
                    "question_text": "In the last few weeks I have felt that things are dull and boring",
                    "option": [
                        "Extremely",
                        "Quite a bit",
                        "Moderately",
                        "A little",
                        "Very",
                        "Slightly or not at all"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 10,
                    "question_text": "In the last few weeks I have felt guilty about something that I have done or said",
                    "option": [
                        "Extremely",
                        "Quite a bit",
                        "Moderately",
                        "A little",
                        "Very",
                        "Slightly or not at all"
                    ]
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
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 36,
                    "question_text": "How often do you have difficulty concentrating or making decisions during manic episodes?",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "text",
                    "question_id": 47,
                    "question_text": "Do you experience periods of abnormally elevated mood or irritability?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 48,
                    "question_text": "Do you experience a decreased need for sleep during manic episodes?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 49,
                    "question_text": "Do you feel overly optimistic or grandiose during manic episodes?",
                    "option": null
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
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 38,
                    "question_text": "How often do you feel tired or have low energy most days?",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "text",
                    "question_id": 50,
                    "question_text": "Do you often feel sad, empty, or hopeless?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 51,
                    "question_text": "Have you lost interest or pleasure in activities you used to enjoy?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 52,
                    "question_text": "Do you have trouble sleeping or sleeping too much?",
                    "option": null
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
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 34,
                    "question_text": "How often do you worry excessively about different things?",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "text",
                    "question_id": 44,
                    "question_text": "Do you often feel nervous, anxious, or on edge?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 45,
                    "question_text": "Do you experience sudden feelings of terror or panic?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 46,
                    "question_text": "Do you experience physical symptoms such as trembling, sweating, or palpitations?",
                    "option": null
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
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 32,
                    "question_text": "How often do you experience changes in sleep patterns or appetite?",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "text",
                    "question_id": 41,
                    "question_text": "Have you experienced significant changes in your life recently?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 42,
                    "question_text": "Do you often feel sad or hopeless?",
                    "option": null
                },
                {
                    "ques_type": "text",
                    "question_id": 43,
                    "question_text": "Do you have difficulty concentrating or making decisions?",
                    "option": null
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
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 29,
                    "question_text": "How frequently do you lose things necessary for tasks or activities?",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 30,
                    "question_text": "How often do you feel a need to keep moving or fidgeting?",
                    "option": [
                        "Rarely/Never (Once/never)",
                        "Sometimes (About 2-3 times)",
                        "Often (About once a week)",
                        "Very often (About 3-4 times every week)",
                        "Regularly (Almost every day)"
                    ]
                },
                {
                    "ques_type": "text",
                    "question_id": 39,
                    "question_text": "Do you often have trouble paying attention to details or making careless mistakes in your work or other activities?",
                    "option": null
                },
                {
                    "ques_type": "nat",
                    "question_id": 40,
                    "question_text": "Do you often interrupt others or intrude on conversations or games?",
                    "option": null
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
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 2,
                    "question_text": "I gave up trying to make big improvements or changes in my life a long time ago.",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 3,
                    "question_text": "I feel that I get a lot out of my friendships.",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 4,
                    "question_text": "I have difficulty organizing my life in a way that is satisfying to me.",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 5,
                    "question_text": "In many ways, I feel disappointed about my achievements in life.",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
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
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 18,
                    "question_text": "I do not feel connected to the society",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 19,
                    "question_text": "I think society has the potential for positive changes",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 20,
                    "question_text": "I believe that the society can become a better place",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 21,
                    "question_text": "I feel I am accepted by other people",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                },
                {
                    "ques_type": "mcq",
                    "question_id": 22,
                    "question_text": "I feel a sense of belongingness to society",
                    "option": [
                        "Strongly disagree",
                        "Disagree somewhat",
                        "Disagree slightly",
                        "Agree slightly",
                        "Agree somewhat",
                        "Strongly agree"
                    ]
                }
            ]
        }
    ]
}       
```
```
## Upload Data format
{
  "fieldworker_id": 0,
  "follow_up": [
    {
      "follow_up_id": 0,
      "fieldworker_id": 0,
      "patient_name": "string",
      "patient_address": "string",
      "patient_token": 0,
      "patient_abhaid": "string",
      "visited_status": true
    }
  ],
  "questionnaire_response": [
    {
      "patient_abhaid": "string",
      "questionnaire_type": "string",
      "responses": [
        {
          "question_id": 0,
          "response": "string"
        }
      ]
    }
  ],
  "fieldworker_comments": [
    {
      "patient_abhaid": "string",
      "comment": "string",
      "date": "string"
    }
  ],
  "artifacts": [
    {
      "patient_abhaid": "string",
      "date": "string",
      "object": "string"
    }
  ],
  "chosen_doctor": [
    {
      "doctor_id": 0,
      "patient_abhaid": "string"
    }
  ],
  "patient_registration": [
    {
      "fieldWorker_id": 0,
      "patient_name": "string",
      "patient_dob": "2024-04-13T07:17:13.263Z",
      "patient_gender": "string",
      "patient_abhaid": "string",
      "patient_phoneNumber": "string",
      "patient_address": "string",
      "patient_pincode": 0,
      "patient_blockCode": 0,
      "patient_preferred_language": "string"
    }
  ]
}
```
# Backend Data
```

{
  "questionnaire": [
    {
      "icd10": "string",
      "questions": [
        {
          "ques_type": "string",
          "question_id": 0,
          "question_text": "string",
          "option": [
            "string"
          ]
        }
      ]
    }
  ],
  "field_worker_details": {
    "field_worker_assigned_sector": "string"
  },
  "follow_up": [
    {
      "follow_up_id": 0,
      "patient_name": "string",
      "patient_token": 0,
      "patient_abhaid": "string",
      "patient_address": "string",
      "visited_status": true,
      "patient_followupdate": "2024-04-15T04:58:52.177Z",
      "icd10": "string"
    }
  ],
  "patient_details": [
    {
      "patient_abhaid": "string",
      "fieldworker_id": 0,
      "patient_name": "string",
      "patient_address": "string",
      "ongoing_medication_orders": {
        "icd10_code": "string",
        "doctor_name": "string",
        "doctor_comment": "string",
        "questionnaire_type": "string",
        "date": "2024-04-15T04:58:52.177Z"
      },
      "prescriptions": [
        {
          "disease_name": "string",
          "prescription": "string",
          "date": "2024-04-15T04:58:52.177Z",
          "doctor_name": "string"
        }
      ],
      "accessible": true
    }
  ],
  "doctors": [
    {
      "doctor_id": 0,
      "doctor_name": "string",
      "open_slots": 0,
      "workingAddress": "string",
      "specialization": "string"
    }
  ]
}

```


