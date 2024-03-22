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

## 📝 Notes

- [`react-native-reanimated` docs](https://docs.swmansion.com/react-native-reanimated/)

## Download Region Data Format

```json
data = {
  "follow-up": [
    {
      "patient-id": 123,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "xyz",
      "visited-status": false, 
    },
    {
      "patient-id": 124,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "xyz",
      "visited-status": false, 
    }
  ],
  // list of all patient details sectorwise and alloted to fieldworker
  "patient-details": [
    {
      "patient-id": 123,
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "xyz",
      "patient-token": 48464651, 
      "patient-abhaid": 1234-4567-1534-4821,
      "ongoing-medication-orders": {
        "ICD10-code": 1264,
        "docters-comment": "xyz",
        "date": "12-05-2014"
      },   
      "recent-3-prescriptions": [{
        "ICD10-code": 1264,
        "prescription": "xyz",
        "date": "12-05-2014"
      }],
      "artifacts": [{
        "date": "12-05-2014",
        "object": "0b0101101",
      }],
      "docter-assigned": NULL,
      "questionnaire": {
        "ICD10-code": 1264,
        "responses": [1,0,3,2]
      }
    }
  ],
  "doctors": [
    {
      "doctor-name": "Abhishek Gupta",
      "available-slots": {"12-05-2014": 20, "13-05-2014":15}
    }
  ],
  "ICD10": {
    "1234": "pagal hai",
    "13456": "Mental diaaherra"
  },
  // donot upload questionnaire data
  "questionnaire" :{
    "default" : ["str", "str" ,"str"],
    "ICD10-code1" : ["str", "str" ,"str"],
    "ICD10-code2" : ["str", "str" ,"str"],
  },
  // upload section
  "register-patient": [
    {
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "xyz",
      "patient-token": 48464651, 
      "patient-abhaid": 1234-4567-1534-4821,
      "artifacts": [{
        "date": "12-05-2014",
        "object": "0b0101101",
      }],
      "docter-assigned": NULL,
      "questionnaire": {
        "ICD10-code": "default",
        "responses": [1,0,3,2]
      }
    },
     {
      "fieldworker-id": 1234,
      "patient-name": "Abhishek Gupta",
      "patient-address": "xyz",
      "patient-token": 48464651, 
      "patient-abhaid": 1234-4567-1534-4821,
      "artifacts": [{
        "date": "12-05-2014",
        "object": "0b0101101",
      }],
      "docter-assigned": NULL,
      "questionnaire": {
        "ICD10-code": "default",
        "responses": [1,0,3,2]
      }
    }
  ]
}
```


