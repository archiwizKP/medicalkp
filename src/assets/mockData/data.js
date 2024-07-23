export const TowerA = {
  name: "Tower A",
  // "color": "hsl(193, 70%, 50%)",
  children: [
    // Level 1
    {
      name: "Level 1",
      // "color": "hsl(26, 70%, 50%)",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 30,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        // Chamber 1
        {
          name: "A1-ICU",
          color: "hsl(305, 70%, 50%)",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 40,
          Total_inpatients: 35,
          Potential_discharges_today: 6,
          Potential_discharges_tomorrow: 7,
          Available: 2,
          Total_blocked_beds: 1,
          children: [
            {
              name: "A101",
              color: "hsl(6%, 17%, 34%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A102",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A103",
              color: "#102C57",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A104",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A105",
              color: "hsl(250,75%,50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A106",
              color: "hsl(250,75%,50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "58",
              accountNumber: "H00738092143",
              gender: "male",
              disease: "SEIZURE.",
              MR: "H001269490",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/29: Pt presents to hospital for further evaluation of slurred speech, left-sided weakness and fall.  Stroke alert initiated while in ED. pt reports his symptoms started with slurred speech at 1930 01/27/23 (over 24 hours prior to presentation). Then, following day on 01/28/23 he fell twice and developed left sided weakness. Initial NIHSS = 5 due to slurred speech and drift of Left arm and leg and mild Left facial asymmetry. Head CT shows early subacute wedge-shaped hypodensity in the R posterior frontal cortex",
                "01/29",
                "Pt presents to hospital for further evaluation of slurred speech, left-sided weakness and fall.  Stroke alert initiated while in ED. pt reports his symptoms started with slurred speech at 1930 01/27/23 (over 24 hours prior to presentation). Then, following day on 01/28/23 he fell twice and developed left sided weakness. Initial NIHSS = 5 due to slurred speech and drift of Left arm and leg and mild Left facial asymmetry. Head CT shows early subacute wedge-shaped hypodensity in the R posterior frontal cortex",
              ],
              labStatus: "B12 799, FOLATE >15.0, THIAMINE: PENDING.",
            },
          ],
        },
        // Chamber 2
        // {
        //   name: "A1-PACU",
        //   color: "hsl(305, 70%, 50%)",
        //   Inpatient_occupancy: "100%",
        //   Total_inpatient_beds: 37,
        //   Total_inpatients: 39,
        //   Potential_discharges_today: 43,
        //   Potential_discharges_tomorrow: 4,
        //   Available: 1,
        //   Total_blocked_beds: 3,
        //   children: [
        //     {
        //       name: "A111",
        //       color: "hsl(6%, 17%, 34%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A112",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A113",
        //       color: "#102C57",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A114",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A115",
        //       color: "hsl(250,75%,50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A116",
        //       color: "hsl(250,75%,50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A117",
        //       color: "hsl(250,75%,50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A118",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A119",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A120",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A121",
        //       color: "hsl(6%, 17%, 34%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A122",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A123",
        //       color: "#102C57",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A124",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A125",
        //       color: "hsl(250,75%,50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A126",
        //       color: "hsl(250,75%,50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A127",
        //       color: "hsl(250,75%,50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A128",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A129",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //     {
        //       name: "A130",
        //       color: "hsl(82, 70%, 50%)",
        //       loc: 50,
        //       type: "Stroke",
        //       bedStatus:'empty'
        //     },
        //   ],
        // },
      ],
    },
    // Level 2
    {
      name: "Level 2",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 40,
      Total_inpatients: 90,
      Potential_discharges_today: 1,
      Potential_discharges_tomorrow: 5,
      Available: 5,
      Total_blocked_beds: 1,
      children: [
        // Chamber 1
        {
          name: "A2-ICU",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 12,
          Total_inpatients: 25,
          Potential_discharges_today: 29,
          Potential_discharges_tomorrow: 63,
          Available: 1,
          Total_blocked_beds: 23,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A231",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A232",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A233",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A234",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A235",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "67",
              accountNumber: "H00738046639",
              gender: "male",
              MR: "H000287230",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/29: Pt presents to hospital for further evaluation of slurred speech, left-sided weakness and fall.  Stroke alert initiated while in ED. pt reports his symptoms started with slurred speech at 1930 01/27/23 (over 24 hours prior to presentation). Then, following day on 01/28/23 he fell twice and developed left sided weakness. Initial NIHSS = 5 due to slurred speech and drift of Left arm and leg and mild Left facial asymmetry. Head CT shows early subacute wedge-shaped hypodensity in the R posterior frontal cortex",
                "01/29",
                "Pt presents to hospital for further evaluation of slurred speech, left-sided weakness and fall.  Stroke alert initiated while in ED. pt reports his symptoms started with slurred speech at 1930 01/27/23 (over 24 hours prior to presentation). Then, following day on 01/28/23 he fell twice and developed left sided weakness. Initial NIHSS = 5 due to slurred speech and drift of Left arm and leg and mild Left facial asymmetry. Head CT shows early subacute wedge-shaped hypodensity in the R posterior frontal cortex",
              ],
              labStatus: "No labs ordered on 02/06/23.",
            },
            {
              name: "A236",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A237",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A238",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A239",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A240",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
          ],
        },
        // Chamber 2
        {
          name: "A2-PCU",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A201",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A202",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A203",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A204",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A205",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A206",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A207",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A208",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "58",
              accountNumber: "H00738021649",
              gender: "male",
              disease: "stroke alert",
              MR: "H000123731",
              InsuranceCompany: "HMO",
              history: [
                "S: 01/29: Pt is hospitalized with LV thrombus and on therapeutic heparin drip for past 3 days and received coumadin today 7.5 mg. Last known well 01/28/23 at 1930. Found at 2130 on 01/28/23 with Right side weakness and dysarthria. NIH 10. CT of head shows no ICH but subacute/chronic L parieto occipital stroke",
                "01/29",
                "Pt is hospitalized with LV thrombus and on therapeutic heparin drip for past 3 days and received coumadin today 7.5 mg. Last known well 01/28/23 at 1930. Found at 2130 on 01/28/23 with Right side weakness and dysarthria. NIH 10. CT of head shows no ICH but subacute/chronic L parieto occipital stroke",
              ],
              labStatus: "No labs ordered on 02/03/23.",
            },
            {
              name: "A209",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A210",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A211",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A212",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A213",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A214",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A215",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A216",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A217",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "76",
              accountNumber: "H00738060879",
              gender: "male",
              disease: "STROKE ALERT.",
              MR: "H000946598",
              InsuranceCompany: "MCR",
              history: [
                "S: 02/01: Pt presents to the hospital on 1/31/23 for worsening shortness of breath over the past 2-3 days. She is not able to walk around her house without become short of breath. Pt also reports intermittent palpitations as well as new onset cough without sputum production. Pt was admitted for further care and managment of Afib. Pt was admitted to ICU secondary to cardizem gtt. Pt received lospressor 50 mg BID 1/31/23 at 22:06, with improvement in HR to 73. At that time Cardene drip was stopped. Pt's last known normal was during last medication administration at approximately 10:11 p.m. 1/31/23",
                "02/01",
                "Pt presents to the hospital on 1/31/23 for worsening shortness of breath over the past 2-3 days. She is not able to walk around her house without become short of breath. Pt also reports intermittent palpitations as well as new onset cough without sputum production. Pt was admitted for further care and managment of Afib. Pt was admitted to ICU secondary to cardizem gtt. Pt received lospressor 50 mg BID 1/31/23 at 22:06, with improvement in HR to 73. At that time Cardene drip was stopped. Pt's last known normal was during last medication administration at approximately 10:11 p.m. 1/31/23",
              ],
              labStatus: "No labs ordered on 02/03/23.",
            },
            {
              name: "A218",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A219",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A220",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A221",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "A222",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A223",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A224",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A225",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A226",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A227",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A228",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John doe ",
              age: "58",
              accountNumber: "H00738027071",
              gender: "male",
              disease: "STROKE",
              MR: "H000364483",
              InsuranceCompany: "POS",
              history: [
                "S: 01/31: Pt presented intially to BRH on 1/25/23 complaining of shortness of breath and bil leg edema for 2 days. Neurology is consulted for confusion and alerted mental status intermittently. Per nurse, pt has episode of confusion and hallucination, was also found to be naked sitting at nurse station. Her discharge is pending neurology evaluation.",
                "01/31",
                "Pt presented intially to BRH on 1/25/23 complaining of shortness of breath and bil leg edema for 2 days. Neurology is consulted for confusion and alerted mental status intermittently. Per nurse, pt has episode of confusion and hallucination, was also found to be naked sitting at nurse station. Her discharge is pending neurology evaluation.",
              ],
              labStatus: "thiamine 75.9.",
            },
            {
              name: "A229",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A230",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
          ],
        },
      ],
    },
    // Level 3
    {
      name: "Level 3",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 40,
      Total_inpatients: 90,
      Potential_discharges_today: 23,
      Potential_discharges_tomorrow: 43,
      Available: 34,
      Total_blocked_beds: 2,
      children: [
        // Chamber 1
        {
          name: "A3-ICU",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 24,
          Total_inpatients: 20,
          Potential_discharges_today: 3,
          Potential_discharges_tomorrow: 5,
          Available: 9,
          Total_blocked_beds: 1,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A331",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A332",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A333",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A334",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A335",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              bedStatus:'booked',
              patientName: "John Doe",
              age: "65",
              accountNumber: "H00738024570",
              gender: "male",
              disease:
                "hypertension, hyperlipidemia, cardiomyopathy, Status post Boston Scientific pacemaker/ICD 2015, COPD, active smoker, morbid obesity, bipolar.",
              MR: "H000461254",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/31: Pt presented intially to BRH on 1/25/23 complaining of shortness of breath and bil leg edema for 2 days. Neurology is consulted for confusion and alerted mental status intermittently. Per nurse, pt has episode of confusion and hallucination, was also found to be naked sitting at nurse station. Her discharge is pending neurology evaluation.",
                "01/31",
                "Pt presented intially to BRH on 1/25/23 complaining of shortness of breath and bil leg edema for 2 days. Neurology is consulted for confusion and alerted mental status intermittently. Per nurse, pt has episode of confusion and hallucination, was also found to be naked sitting at nurse station. Her discharge is pending neurology evaluation.",
              ],
              labStatus: "thiamine 75.9.",
            },
            {
              name: "A336",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A337",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A338",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "73",
              accountNumber: "H00738031599",
              gender: "male",
              disease: "STROKE ALERT, NIH of 12.",
              MR: "H001278214",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/30: Pt has been admitted to the hospital since 01/26/23 for pneumonia and right lower lobe bronchial obstruction on CTA chest.  Pulmonology was planning for bronchoscopy today to evaluate for possible lung mass given pt's extensive smoking history. Pt also found to have BLE DVTs with plan to change to Eliquis at discharge.",
                "01/30",
                "Pt has been admitted to the hospital since 01/26/23 for pneumonia and right lower lobe bronchial obstruction on CTA chest.  Pulmonology was planning for bronchoscopy today to evaluate for possible lung mass given pt's extensive smoking history. Pt also found to have BLE DVTs with plan to change to Eliquis at discharge.",
              ],
              labStatus: "No labs ordered on 02/03/23.",
            },
            {
              name: "A339",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A340",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
          ],
        },
        // Chamber 2
        {
          name: "A3-PCU",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 54,
          Total_inpatients: 45,
          Potential_discharges_today: 5,
          Potential_discharges_tomorrow: 6,
          Available: 4,
          Total_blocked_beds: 3,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A301",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A302",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A303",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A304",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A305",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A306",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A307",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A308",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "48",
              accountNumber: "H00738082952",
              gender: "male",
              disease: "STROKE",
              MR: "H001279564",
              InsuranceCompany: "POS",
              history: [
                "S: 02/07: Pt presented to ED via EMS for possible seizure like activity that witnessed at her facility. Per family at bedside, pt had a fall yesterday morning, she was evaluated in ED but she got discharged, pt had hematoma on back from her fall. Then later yesterday evening, pt was having a dinner at ALF, pt was found to have staring episode, seizure like acitivity,she was locked up and shaking. Patient is incontinent at her baseline. EMS stated that her VS was stable and BG 225 with to be appeared in postictal but she was more oriented and alert in the ED.",
                "02/07",
                "Pt presented to ED via EMS for possible seizure like activity that witnessed at her facility. Per family at bedside, pt had a fall yesterday morning, she was evaluated in ED but she got discharged, pt had hematoma on back from her fall. Then later yesterday evening, pt was having a dinner at ALF, pt was found to have staring episode, seizure like acitivity,she was locked up and shaking. Patient is incontinent at her baseline. EMS stated that her VS was stable and BG 225 with to be appeared in postictal but she was more oriented and alert in the ED.",
              ],
              labStatus: "No labs ordered on 02/07/23.",
            },
            {
              name: "A309",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A310",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "68",
              accountNumber: "H00738099604",
              gender: "male",
              disease: "SEIZURE EPISODE.",
              MR: "H000367220",
              InsuranceCompany: "DSNP",
              history: [
                "S: 02/07: Pt presented to ED via EMS for possible seizure like activity that witnessed at her facility. Per family at bedside, pt had a fall yesterday morning, she was evaluated in ED but she got discharged, pt had hematoma on back from her fall. Then later yesterday evening, pt was having a dinner at ALF, pt was found to have staring episode, seizure like acitivity,she was locked up and shaking. Patient is incontinent at her baseline. EMS stated that her VS was stable and BG 225 with to be appeared in postictal but she was more oriented and alert in the ED.",
                "02/07",
                "Pt presented to ED via EMS for possible seizure like activity that witnessed at her facility. Per family at bedside, pt had a fall yesterday morning, she was evaluated in ED but she got discharged, pt had hematoma on back from her fall. Then later yesterday evening, pt was having a dinner at ALF, pt was found to have staring episode, seizure like acitivity,she was locked up and shaking. Patient is incontinent at her baseline. EMS stated that her VS was stable and BG 225 with to be appeared in postictal but she was more oriented and alert in the ED.",
              ],
              labStatus: "02/06: SODIUM 123 D L.\n\nMRI BRAIN: PENDING.",
            },
            {
              name: "A311",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "78",
              accountNumber: "H00738075010",
              gender: "male",
              disease: "STROKE R/O, WITH KNOWN H/O BRAIN METS.",
              MR: "H001279349",
              InsuranceCompany: "POS",
              history: [
                "S: 02/02: No hemodynamically significant stenosis in the carotid arteries.",
                "02/02",
                "No hemodynamically significant stenosis in the carotid arteries.",
              ],
              labStatus: "No labs ordered on 02/02/23.",
            },
            {
              name: "A312",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A313",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A314",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "83",
              accountNumber: "H00738091660",
              gender: "male",
              disease: "STROKE.",
              MR: "H000858227",
              InsuranceCompany: "AB",
              history: [
                "S: 02/05: Pt presents due to stroke-like symptoms. History obtained from patient's grand daughter at bedside. Patient live alone with camera surveillance. Granddaughter lives in close proximity. She found patient laying on the floor this morning around 7:00a.m via the camera. His last well known normal was 3:00a.m. Patient was found with slurry speech and inability to stand up from the floor. ",
                "02/05",
                "Pt presents due to stroke-like symptoms. History obtained from patient's grand daughter at bedside. Patient live alone with camera surveillance. Granddaughter lives in close proximity. She found patient laying on the floor this morning around 7:00a.m via the camera. His last well known normal was 3:00a.m. Patient was found with slurry speech and inability to stand up from the floor. ",
              ],
              labStatus: "No labs ordered on 02/07/23.",
            },
            {
              name: "A315",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A316",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A317",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A318",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "95",
              accountNumber: "H00738089401",
              gender: "male",
              disease: "stroke alert.",
              MR: "H000223363",
              InsuranceCompany: "AB",
              history: [
                "S: 02/05: Pt presents to hospital on 02/04 for further evaluation of altered mental status.  Pt had been her normal state of health when going to bed 02/03 at 8:00 p.m.. Upon waking the following afternoon, family noticed pt was unable to speak, there was a right facial droop, and she was unable to move her right arm.",
                "02/05",
                "Pt presents to hospital on 02/04 for further evaluation of altered mental status.  Pt had been her normal state of health when going to bed 02/03 at 8:00 p.m.. Upon waking the following afternoon, family noticed pt was unable to speak, there was a right facial droop, and she was unable to move her right arm.",
              ],
              labStatus:
                "02/05: TRIGLYCERIDES 77, CHOLESTEROL 208 H, LDL 143 H, HDL 48, TSH 2.23, A1C 8.0 H.\n\nMRI BRAIN: PENDING.",
            },
            {
              name: "A319",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "90",
              accountNumber: "H00738084691",
              gender: "male",
              disease: "STROKE ALERT.",
              MR: "H000153748",
              InsuranceCompany: "AB",
              history: [
                "S: 02/04: Pt presents to the hospital for further evaluation of diarrhea and vomiting since 02/03/2023.  Patient is a resident at Hawthorne nursing facility. Upon interview and exam, patient is alert and oriented to self, place (hospital), situation (here for vomiting). Patient is extremely hard of hearing, hearing aids not present.  Patient following most commands, however having some difficulty due to hard of hearing.  Patient is moving all extremities equally however lower extremities weaker than upper extremities. Pt denies symptoms of headache, vision changes, weakness, paresthesias. Patient does report recent vomiting, no appetite.",
                "02/04",
                "Pt presents to the hospital for further evaluation of diarrhea and vomiting since 02/03/2023.  Patient is a resident at Hawthorne nursing facility. Upon interview and exam, patient is alert and oriented to self, place (hospital), situation (here for vomiting). Patient is extremely hard of hearing, hearing aids not present.  Patient following most commands, however having some difficulty due to hard of hearing.  Patient is moving all extremities equally however lower extremities weaker than upper extremities. Pt denies symptoms of headache, vision changes, weakness, paresthesias. Patient does report recent vomiting, no appetite.",
              ],
              labStatus: "UA: NOT RCVD.",
            },
            {
              name: "A320",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A321",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A322",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A323",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A324",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A325",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A326",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "68",
              accountNumber: "H00738102792",
              gender: "male",
              disease: "STROKE.",
              MR: "H000593170",
              InsuranceCompany: "POS",
              history: [
                "S: 02/07: Pt presented to ED via EMS for altered mental status. According to EMS patient was almost finished with dialysis when she became confused and requesting to leave.  LKW roughly 1 hour prior to arrival.",
                "02/07",
                "Pt presented to ED via EMS for altered mental status. According to EMS patient was almost finished with dialysis when she became confused and requesting to leave.  LKW roughly 1 hour prior to arrival.",
              ],
              labStatus:
                "AMMONIA 27, TRIGLY 128, CHOLEST 217 H, LDL 145 H, HDL 42, TSH 15.90 H.\n\nUDS, UA, B12, FOLATE, THIMAINE, A1C, MRI BRAIN, CAROTID US: PENDING.",
            },
            {
              name: "A327",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A328",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A329",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "68",
              accountNumber: "H00738037426",
              gender: "male",
              disease: "STROKE.",
              MR: "H000736705",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/27: Pt presents to ED via EMS after ground level fall. Pt has lower back pain due to herniated disc in L5-S1. Patient stated that she went to bathroom, and her legs gave out and hit right of her head. CT brain showed acute subdural hematoma over the right cerebral convexity measuring 7 mm in thickness. ",
                "01/27",
                "Pt presents to ED via EMS after ground level fall. Pt has lower back pain due to herniated disc in L5-S1. Patient stated that she went to bathroom, and her legs gave out and hit right of her head. CT brain showed acute subdural hematoma over the right cerebral convexity measuring 7 mm in thickness. ",
              ],
              labStatus: "THIAMINE: 156.7.",
            },
            {
              name: "A330",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "65",
              accountNumber: "H00738080100",
              gender: "male",
              disease:
                "diabetes, peripheral neuropathy and chronic lower back pain on methadone",
              MR: "H001279481",
              InsuranceCompany: "POS",
              history: [
                "S: 02/03: Pt transferred from South Shore Hospital for neuro IR evaluation.  Patient presented initially due to syncopal episode.  Patient states he was at his pain doctor's office when he suddenly felt lightheaded/dizziness then the next minute he passed out falling to the ground therefore hitting his head on the floor.  Loss of consciousness was for few seconds.  He reports headache and neck thereafter.  Patient reports similar symptoms 5-6 months ago.  He was seen at a hospital but could not remember exactly what was done.  Patient reports visual changes but denies headache, upper lower extremity weakness or numbness.",
                "02/03",
                "Pt transferred from South Shore Hospital for neuro IR evaluation.  Patient presented initially due to syncopal episode.  Patient states he was at his pain doctor's office when he suddenly felt lightheaded/dizziness then the next minute he passed out falling to the ground therefore hitting his head on the floor.  Loss of consciousness was for few seconds.  He reports headache and neck thereafter.  Patient reports similar symptoms 5-6 months ago.  He was seen at a hospital but could not remember exactly what was done.  Patient reports visual changes but denies headache, upper lower extremity weakness or numbness.",
              ],
              labStatus: "No labs ordered on 02/04/23.",
            },
          ],
        },
      ],
    },
    // Level 4
    {
      name: "Level 4",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 40,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        // Chamber 1
        {
          name: "A4-ICU",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A431",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A432",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "51",
              accountNumber: "H00738027083",
              gender: "male",
              disease:
                "diabetes type 2, hypertension,, noncompliance of medications and recent right AKA",
              MR: "H001032196",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/26: Pt was brought ED via EMS as cariac arrest. Pt is in rehab after his amputation, per his brother who is in bedside. Pt was found to be unresposive in rehab without pulse by EMS, he received CRP, patient was in PEA in the route, ROSC achieved after 15 minutes, his blood glucose by was 27, pt was given D50. He had another episode of PEA in the ED, ROSC was achieved after 2 rounds of CRP. HPI is obtained from chart, pt is intubated and not following any commands, brother is at bedside but he does not have any details to provide.",
                "01/26",
                "Pt was brought ED via EMS as cariac arrest. Pt is in rehab after his amputation, per his brother who is in bedside. Pt was found to be unresposive in rehab without pulse by EMS, he received CRP, patient was in PEA in the route, ROSC achieved after 15 minutes, his blood glucose by was 27, pt was given D50. He had another episode of PEA in the ED, ROSC was achieved after 2 rounds of CRP. HPI is obtained from chart, pt is intubated and not following any commands, brother is at bedside but he does not have any details to provide.",
              ],
              labStatus: "No labs ordered on 01/28/23.",
            },
            {
              name: "A433",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A434",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A435",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A436",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "73",
              accountNumber: "H00738069346",
              gender: "male",
              disease: "STROKE ALERT.",
              MR: "H000108281",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 02/01: St-Alert: Pt presented to hospital via EMS after being found unresponsive. Per EMS, husband reported that pt got up and ate breakfast and took her medications. She told him she was tired and sat down on couch and he went in other room for few minutes and when he came back she was sitting there with her eyes open, but was unresponsive and would not talk to him.  Last known well 0815 today. Stroke alert called prior to arrival at 0844. Pt arrived at 0856. Pt examined 0856. Pt taken for immediate brain CT which showed no acute intracranial abnormalities. Pt evaluated alongside neurologist, Dr. Khan. On exam NIH of 20, pt is lethargic, aphasic, not following commands, forced right gaze, and bilateral lower extremity weakness. Blood glucose 127. Blood pressure 161/85. Husband at bedside denies any history of intracranial hemorrhage, recent head injury, recent surgery/procedure, known aneurysm/arterial venous malformation, active bleeding, or endocarditis. Pt's husband denies any use of blood thinner medication. Pt deemed candidate for tenecteplase.",
                "02/01",
                "St-Alert: Pt presented to hospital via EMS after being found unresponsive. Per EMS, husband reported that pt got up and ate breakfast and took her medications. She told him she was tired and sat down on couch and he went in other room for few minutes and when he came back she was sitting there with her eyes open, but was unresponsive and would not talk to him.  Last known well 0815 today. Stroke alert called prior to arrival at 0844. Pt arrived at 0856. Pt examined 0856. Pt taken for immediate brain CT which showed no acute intracranial abnormalities. Pt evaluated alongside neurologist, Dr. Khan. On exam NIH of 20, pt is lethargic, aphasic, not following commands, forced right gaze, and bilateral lower extremity weakness. Blood glucose 127. Blood pressure 161/85. Husband at bedside denies any history of intracranial hemorrhage, recent head injury, recent surgery/procedure, known aneurysm/arterial venous malformation, active bleeding, or endocarditis. Pt's husband denies any use of blood thinner medication. Pt deemed candidate for tenecteplase.",
              ],
              labStatus: "THIMAINE: 101.9.",
            },
            {
              name: "A437",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A438",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A439",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A440",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
          ],
        },
        // Chamber 2
        {
          name: "A4-MED",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A401",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A402",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "56",
              accountNumber: "H00738102766",
              gender: "male",
              disease: "hypertension and hyperlipidemia",
              MR: "H001280159",
              InsuranceCompany: "PLUS",
              history: [
                "S: 02/07: St-Alert: Pt presented to ED for slurred speech and left facial droop.  Last known well 8:00 p.m. last night.  Patient states she was talking to someone over the phone and they were concerned that she had slurred speech.  This morning patient noticed her left face seemed to be drooping and numb. Stroke alert called at 1025.  Patient examined 1026.  Patient taken for brain CT which showed no acute intracranial abnormalities. Pt evaluated alongside neurologist, Dr. Khan.  On exam NIH of 2, left facial droop and left lower facial numbness.  Pt is alert and oriented, following all commands, no focal weakness, no sensory deficits of extremities, speech is intact, and no ataxia.  Blood pressure 171/95. Pt deemed not a candidate for tenecteplase due to outside window of time LKW.  Pt deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
                "02/07",
                "St-Alert: Pt presented to ED for slurred speech and left facial droop.  Last known well 8:00 p.m. last night.  Patient states she was talking to someone over the phone and they were concerned that she had slurred speech.  This morning patient noticed her left face seemed to be drooping and numb. Stroke alert called at 1025.  Patient examined 1026.  Patient taken for brain CT which showed no acute intracranial abnormalities. Pt evaluated alongside neurologist, Dr. Khan.  On exam NIH of 2, left facial droop and left lower facial numbness.  Pt is alert and oriented, following all commands, no focal weakness, no sensory deficits of extremities, speech is intact, and no ataxia.  Blood pressure 171/95. Pt deemed not a candidate for tenecteplase due to outside window of time LKW.  Pt deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
              ],
              labStatus:
                "TRIGLY 131, CHOLEST 125, LDL 51, HDL 62 H, TSH 1.06.\n\nMRI BRAIN, UDS, A1C: PENDING.",
            },
            {
              name: "A403",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "70",
              accountNumber: "H00738068611",
              gender: "male",
              disease: "hypertension and hyperlipidemia",
              MR: "H001279190",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 02/02: Pt presents with new onset dizziness associated with vomiting.  Patient is awake and oriented to self and time but confused and agitated.  Patient is on soft restraint.  History obtained from wife and son at bedside.  Per wife patient continue to have dizziness and vomiting in the ED. Rapid response was called last night due to agitation.  Brain CT negative for acute finding.",
                "02/02",
                "Pt presents with new onset dizziness associated with vomiting.  Patient is awake and oriented to self and time but confused and agitated.  Patient is on soft restraint.  History obtained from wife and son at bedside.  Per wife patient continue to have dizziness and vomiting in the ED. Rapid response was called last night due to agitation.  Brain CT negative for acute finding.",
              ],
              labStatus: "No labs ordered on 02/07/23.",
            },
            {
              name: "A404",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "40",
              accountNumber: "H00738101295",
              gender: "male",
              disease: "STROKE.",
              MR: "H001278352",
              InsuranceCompany: "PPC",
              history: [
                "S: 02/07: Pt presents due to slurred speech and mechanical fall.  Patient states he woke up in the middle of the night to use the bathroom when he fell and he could not get himself up the floor. Pt denies hitting his head, loss of consciousness, dizziness, headache, extremity weakness or numbness.  He reports multiple episodes of fall.  Patient also reports slurred speech. He reports left knee pain as a result of fall. Pt had similar episode in the past and had unremarkable extensive workup. Patient was stroke alerted on admission.  NIH score is 0.  CT brain with no acute infarct or hemorrhage.  Patient has intrathecal pump for fentanyl and ineligible to obtain MRI.  Patient states is doing fine now with no neurological deficit.  He only reports left knee pain.",
                "02/07",
                "Pt presents due to slurred speech and mechanical fall.  Patient states he woke up in the middle of the night to use the bathroom when he fell and he could not get himself up the floor. Pt denies hitting his head, loss of consciousness, dizziness, headache, extremity weakness or numbness.  He reports multiple episodes of fall.  Patient also reports slurred speech. He reports left knee pain as a result of fall. Pt had similar episode in the past and had unremarkable extensive workup. Patient was stroke alerted on admission.  NIH score is 0.  CT brain with no acute infarct or hemorrhage.  Patient has intrathecal pump for fentanyl and ineligible to obtain MRI.  Patient states is doing fine now with no neurological deficit.  He only reports left knee pain.",
              ],
              labStatus:
                "02/07: TRIGLY 262 H, CHOLEST 171, LDL 105 H, HDL 24 L.\n\nREPEAT CT BRAIN, A1C: PENDING.",
            },
            {
              name: "A405",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "72",
              accountNumber: "H00738102932",
              gender: "male",
              disease: "STROKE.",
              MR: "H001280163",
              InsuranceCompany: "AB",
              history: [
                "S: 02/07: St-Alert: Pt presents to ED for AMS.  LKW 10:00 p.m. last night. According to family pt woke up around 5:00 a.m. this morning with some questionable seizure-like activity.  Since then pt has been not responding to family.  According to family patient able to walk with a walker at baseline. Stroke alert called at 1107.  Patient seen and examined at 1107.  Patient taken for immediate CT brain which showed no acute intracranial abnormalities.  Patient evaluated alongside neurologist, Dr. Bangash.  On exam NIH of 7, patient is alert, aphasic, able to state name and age however not month, able to follow commands, and bilateral lower extremity weakness.  During exam patient seemed to be improving neurologically.  Blood glucose 109.  Blood pressure 123/90.  Patient deemed not a candidate for tenecteplase due to outside window of time last known well.  Patient deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel",
                "02/07",
                "St-Alert: Pt presents to ED for AMS.  LKW 10:00 p.m. last night. According to family pt woke up around 5:00 a.m. this morning with some questionable seizure-like activity.  Since then pt has been not responding to family.  According to family patient able to walk with a walker at baseline. Stroke alert called at 1107.  Patient seen and examined at 1107.  Patient taken for immediate CT brain which showed no acute intracranial abnormalities.  Patient evaluated alongside neurologist, Dr. Bangash.  On exam NIH of 7, patient is alert, aphasic, able to state name and age however not month, able to follow commands, and bilateral lower extremity weakness.  During exam patient seemed to be improving neurologically.  Blood glucose 109.  Blood pressure 123/90.  Patient deemed not a candidate for tenecteplase due to outside window of time last known well.  Patient deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel",
              ],
              labStatus:
                "VALPROIC ACID 105.5 CH, AMMONIA 25,  UR COLOR STRAW L, U BLOOD SMALL H, U RBC 6-10 H, U MUCUS RARE H otherwise UA WNL. TRIGLYCERIDES 50, CHOLESTEROL134, LDL 62, HDL 64 H, TSH 2.24.\n\nA1c, THIAMINE, B12, FOLATE, UDS: PENDING.",
            },
            {
              name: "A406",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "67",
              accountNumber: "H00738102259",
              gender: "male",
              disease: "STROKE.",
              MR: "H000531069",
              InsuranceCompany: "MCD",
              history: [
                "S: 02/07: ST-Alert: Pt presented to ED for dizziness. Pt reports dizziness started at 9:00 p.m. last night. Pt states she woke up around 3:00 a.m. to go to the bathroom and was falling to right side. Pt reports dizziness worsened by head movement and changing position. Pt denies similar symptoms in past. Denies any ear ache, hearing loss, or recent URIs.  Patient reports she has been training to run a 5K and did over exert herself on Saturday. Stroke alert called at 0921.  Pt seen and examined at 0922.  Patient taken for immediate brain CT which showed no acute intracranial abnormalities.  Pt evaluated alongside neurologist, Dr. Khan.  On exam NIH of 0, bidirectional horizontal nystagmus, no focal weakness, no sensory deficits, no ataxia, and speech is intact.  Blood glucose 162.  Blood pressure 190/93.  Patient deemed not a candidate for tenecteplase due to outside window of time last known well.  Patient deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
                "02/07",
                "ST-Alert: Pt presented to ED for dizziness. Pt reports dizziness started at 9:00 p.m. last night. Pt states she woke up around 3:00 a.m. to go to the bathroom and was falling to right side. Pt reports dizziness worsened by head movement and changing position. Pt denies similar symptoms in past. Denies any ear ache, hearing loss, or recent URIs.  Patient reports she has been training to run a 5K and did over exert herself on Saturday. Stroke alert called at 0921.  Pt seen and examined at 0922.  Patient taken for immediate brain CT which showed no acute intracranial abnormalities.  Pt evaluated alongside neurologist, Dr. Khan.  On exam NIH of 0, bidirectional horizontal nystagmus, no focal weakness, no sensory deficits, no ataxia, and speech is intact.  Blood glucose 162.  Blood pressure 190/93.  Patient deemed not a candidate for tenecteplase due to outside window of time last known well.  Patient deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
              ],
              labStatus:
                "A1C 7.3 H, TGRIGLY 87, CHOLEST 169, LDL 91, HDL 64 H, TSH 1.22.\n\nUDS, MRI BRAIN: PENDING.",
            },
            {
              name: "A407",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "83",
              accountNumber: "H00738059268",
              gender: "male",
              disease:
                "hypertension, dyslipidemia, dyslipidemia, chronic back pain.",
              MR: "H001279028",
              InsuranceCompany: "AB",
              history: [
                "S: 02/04: History of present illness was unable to obtain by patient, patient is unable to answer questions due to altered mental status obtained by chart review. Patient presented from home where he lives with his wife by EMS for ground level fall. His wife reports he just had a fall 2 days prior but did not hurt himself.  01/30/2023 it was midnight, he fell and hurt his back, his wife supposedly did not find him until the next morning so he laid on the ground for approximately 8 hours before she called EMS.  His wife can also get confused and is somewhat of a poor historian, repeating the same things.  She states that he has had worsening mental status at least for the past year.  He has never been formally diagnosed with dementia.  CT of the brain was negative for acute infarction or bleed, mild central atrophy, NPH not excluded.  CT C-spine no acute fracture, spondylitic changes.",
                "02/04",
                "History of present illness was unable to obtain by patient, patient is unable to answer questions due to altered mental status obtained by chart review. Patient presented from home where he lives with his wife by EMS for ground level fall. His wife reports he just had a fall 2 days prior but did not hurt himself.  01/30/2023 it was midnight, he fell and hurt his back, his wife supposedly did not find him until the next morning so he laid on the ground for approximately 8 hours before she called EMS.  His wife can also get confused and is somewhat of a poor historian, repeating the same things.  She states that he has had worsening mental status at least for the past year.  He has never been formally diagnosed with dementia.  CT of the brain was negative for acute infarction or bleed, mild central atrophy, NPH not excluded.  CT C-spine no acute fracture, spondylitic changes.",
              ],
              labStatus: "No labs ordered on 02/04/23.",
            },
            {
              name: "A408",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "74",
              accountNumber: "H00738086859",
              gender: "male",
              disease: "stroke alert",
              MR: "H001276395",
              InsuranceCompany: "POS",
              history: [
                "S: 02/04: Pt is a 74-year-old female, presents to the ED via EMS as a stroke alert.  EMS reports right gaze palsy, left-sided weakness, left-sided facial droop.  Last known well unknown. Pt states she has been in a rehab facility since her discharge from hospital after her humerus fracture, also states that she has been having difficulty ambulating for the past 2 months due to progressive and symmetric leg weakness.  Also endorsing history of frequent urinary tract infections.",
                "02/04",
                "Pt is a 74-year-old female, presents to the ED via EMS as a stroke alert.  EMS reports right gaze palsy, left-sided weakness, left-sided facial droop.  Last known well unknown. Pt states she has been in a rehab facility since her discharge from hospital after her humerus fracture, also states that she has been having difficulty ambulating for the past 2 months due to progressive and symmetric leg weakness.  Also endorsing history of frequent urinary tract infections.",
              ],
              labStatus: "No labs ordered on 02/06/23.",
            },
            {
              name: "A409",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "53",
              accountNumber: "H00737929034",
              gender: "male",
              disease: "STROKE ALERT.",
              MR: "H001275292",
              InsuranceCompany: "ASSISTANCE",
              history: [
                "S: 01/09: Pt presented to hospital after a ground level fall and right humeral neck fracture. Pt reports she quickly got up to go to restroom when fall occurred. Pt denies any loss of consciousness or head injury. CT brain in ER showed no acute abnormalities however remote right frontal infarct. Pt denies any previous knowledge of old stroke. Pt reports that her diabetes and hypertension have not been treated due to lack of health insurance. ",
                "01/09",
                "Pt presented to hospital after a ground level fall and right humeral neck fracture. Pt reports she quickly got up to go to restroom when fall occurred. Pt denies any loss of consciousness or head injury. CT brain in ER showed no acute abnormalities however remote right frontal infarct. Pt denies any previous knowledge of old stroke. Pt reports that her diabetes and hypertension have not been treated due to lack of health insurance. ",
              ],
              labStatus: "No labs ordered on 02/05/23.",
            },
            {
              name: "A410",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "66",
              accountNumber: "H00738101601",
              gender: "male",
              disease: "diabetes hypertension,  hyperlipidemia, CKD",
              MR: "H001103607",
              InsuranceCompany: "AB",
              history: [
                "S: 02/07: Pt presented to ED c/o of worsening right sided weakness. Pt states he woke up yesterday morning with the symptoms that have not improved since so he deceided to come to hospoital for further evalaution.",
                "02/07",
                "Pt presented to ED c/o of worsening right sided weakness. Pt states he woke up yesterday morning with the symptoms that have not improved since so he deceided to come to hospoital for further evalaution.",
              ],
              labStatus:
                "A1C 7.9 H.\n\nMRI BRAIN, CAROTID US, UDS, LIPID PANEL, TSH: PENDING.",
            },
            {
              name: "A411",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A412",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "54",
              accountNumber: "H00738089223",
              gender: "male",
              disease:
                "diabetes mellitus, thyroid disorder, obstructive sleep apnea compliant with CPAP.  Patient hard of hearing at baseline.",
              MR: "H001279769",
              InsuranceCompany: "PPO",
              history: [
                "S: 02/05: Findings suggestive of moderate (50-69%) right ICA stenosis based on velocity criteria. No hemodynamically significant stenosis on the left.",
                "02/05",
                "Findings suggestive of moderate (50-69%) right ICA stenosis based on velocity criteria. No hemodynamically significant stenosis on the left.",
              ],
              labStatus: "No labs ordered on 02/07/23.",
            },
            {
              name: "A413",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "60",
              accountNumber: "H00737963036",
              gender: "male",
              disease: "STROKE.",
              MR: "H000491925",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 01/13: Pt presented to ER today by EMS as a stroke alert in the field for left-sided weakness.  Initial BP is recorded at 144/75 with pulse 103.  Stroke alert was activated. ",
                "01/13",
                "Pt presented to ER today by EMS as a stroke alert in the field for left-sided weakness.  Initial BP is recorded at 144/75 with pulse 103.  Stroke alert was activated. ",
              ],
              labStatus: "No labs ordered on 02/05/23.",
            },
            {
              name: "A414",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "60",
              accountNumber: "H00738103516",
              gender: "male",
              disease: "STROKE.",
              MR: "H001280172",
              InsuranceCompany: "HCA",
              history: [
                "S: 02/07: Pt presented to ED via EMS for left-sided weakness.  Last known well 6:00 p.m. yesterday. Pt reports he experienced sudden onset left-sided weakness which caused him to fall yesterday.  After symptoms did not resolve overnight patient presented to the emergency department.  At baseline patient has left eye strabismus, mild facial asymmetry, and chronic right eye blurry vision. Stroke alert called prior to arrival at 1219.  Patient arrived at 1229.  Patient seen and examined at 1229. Patient taken for immediate CT brain which showed no acute intracranial abnormalities.  Patient evaluated alongside neurologist, Dr. Khan.  On exam NIH of 1, patient is alert and oriented, following commands, speech is intact, left-sided weakness, able to hold left upper extremity without drift, left lower extremity drift, and no ataxia.  Blood pressure 171/64.  Blood glucose 202.  Patient deemed not a candidate for tenecteplase due to outside window of time last known well.  Patient deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
                "02/07",
                "Pt presented to ED via EMS for left-sided weakness.  Last known well 6:00 p.m. yesterday. Pt reports he experienced sudden onset left-sided weakness which caused him to fall yesterday.  After symptoms did not resolve overnight patient presented to the emergency department.  At baseline patient has left eye strabismus, mild facial asymmetry, and chronic right eye blurry vision. Stroke alert called prior to arrival at 1219.  Patient arrived at 1229.  Patient seen and examined at 1229. Patient taken for immediate CT brain which showed no acute intracranial abnormalities.  Patient evaluated alongside neurologist, Dr. Khan.  On exam NIH of 1, patient is alert and oriented, following commands, speech is intact, left-sided weakness, able to hold left upper extremity without drift, left lower extremity drift, and no ataxia.  Blood pressure 171/64.  Blood glucose 202.  Patient deemed not a candidate for tenecteplase due to outside window of time last known well.  Patient deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
              ],
              labStatus:
                "UDS NEGATIVE, A1C 5.1, TRIGLY 58, CHOLEST 182, LDL 51, HDL 116 H, TSH 0.25 L.\n\nMRI BRAIN: PENDING.",
            },
            {
              name: "A415",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",

              age: "59",
              accountNumber: "H00738057632",
              gender: "male",
              disease: "STROKE R/O.",
              MR: "H001278989",
              InsuranceCompany: "EAST",
              history: [
                "S: 01/31: St Alert: Pt has been admitted to hospital since yesterday for hypertensive emergency and intractable nausea/vomiting.  According to pt she has had residual right-sided weakness since her previous CVA in 05/2022, requiring use of a walker to ambulate. Pt states that since being admitted to hospital she felt as though her right-sided weakness had worsened as well right-sided numbness.  Last known well yesterday evening.",
                "01/31",
                "St Alert: Pt has been admitted to hospital since yesterday for hypertensive emergency and intractable nausea/vomiting.  According to pt she has had residual right-sided weakness since her previous CVA in 05/2022, requiring use of a walker to ambulate. Pt states that since being admitted to hospital she felt as though her right-sided weakness had worsened as well right-sided numbness.  Last known well yesterday evening.",
              ],
              labStatus: "No labs ordered on 02/06/23.",
            },
            {
              name: "A416",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "59",
              accountNumber: "H00738030484",
              gender: "male",
              disease: "BRAIN METS.",
              MR: "H001278171",
              InsuranceCompany: "MEDICAID",
              history: [
                "S: 01/26: HPI was unable to obtain by pt due to cognitive, memory impairment and obtained by chart review ",
                "01/26",
                "HPI was unable to obtain by pt due to cognitive, memory impairment and obtained by chart review ",
              ],
              labStatus: "No labs ordered on 02/02/23.",
            },
            {
              name: "A417",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "69",
              accountNumber: "H00738094375",
              gender: "male",
              disease: "SEIZURE, NON-VERBAL, ONLY SAYS YES/NO RESPOND COMMAND.",
              MR: "H000996691",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 02/06: HPI was unable to obtain by pt due to altered mental status obtained by chart review",
                "02/06",
                "HPI was unable to obtain by pt due to altered mental status obtained by chart review",
              ],
              labStatus: "MRI of the brain: PENDING",
            },
            {
              name: "A418",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A419",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "70",
              accountNumber: "H00738077026",
              gender: "male",
              disease: "STROKE.",
              MR: "H001279396",
              InsuranceCompany: "AB",
              history: [
                "S: 02/02: St-Alert: Pt presented to ED via EMS for left-sided weakness, left facial droop, and slurred speech. According to pt's spouse patient went into bathroom and was found by his wife in the bathtub unable to get out.  LKW 11:00 a.m. today.  According to wife patient has some residual left-sided weakness however significantly worsened today.  Pt's wife denies any blood thinner use. Pt and wife deny any recent head trauma. Stroke alert called prior to arrival at 1202.  Pt arrived at 1210.  Pt seen and examined at 1210.  Patient taken for immediate brain CT which showed possible hemorrhagic infarct or metastatic change.  On exam NIH of 6, left facial droop, left upper and lower extremity weakness, and left lower extremity ataxia.  Blood pressure 150/86. Blood glucose 102. Pt deemed not a candidate for tenecteplase due to CT positive for hemorrhage. Pt deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
                "02/02",
                "St-Alert: Pt presented to ED via EMS for left-sided weakness, left facial droop, and slurred speech. According to pt's spouse patient went into bathroom and was found by his wife in the bathtub unable to get out.  LKW 11:00 a.m. today.  According to wife patient has some residual left-sided weakness however significantly worsened today.  Pt's wife denies any blood thinner use. Pt and wife deny any recent head trauma. Stroke alert called prior to arrival at 1202.  Pt arrived at 1210.  Pt seen and examined at 1210.  Patient taken for immediate brain CT which showed possible hemorrhagic infarct or metastatic change.  On exam NIH of 6, left facial droop, left upper and lower extremity weakness, and left lower extremity ataxia.  Blood pressure 150/86. Blood glucose 102. Pt deemed not a candidate for tenecteplase due to CT positive for hemorrhage. Pt deemed not a candidate for mechanical thrombectomy due to no evidence of large vessel occlusion.",
              ],
              labStatus: "MRI BRAIN: PENDING.",
            },
            {
              name: "A420",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "35",
              accountNumber: "H00738100445",
              gender: "male",
              disease: "STROKE ALERT.",
              MR: "H001280084",
              InsuranceCompany: "OOS",
              history: [
                "S: 02/07: Pt presents with headache that started yesterday 7:00 p.m. Patient reports chronic headache. He started having headache 2 years ago with similar presentation each time.  Headache occurs in about every 6-7 month and he's usually evaluated in the emergency room.  Patient describes headache as intermittent lasting for about 30 minutes, pounding in nature and 11/10 intensity.  Headache is usually associated with nausea, vomiting, photophobia, phonophobia and left-sided weakness.  He was previously taking meloxicam.  Patient denies fever, neck pain, chest pain, abdominal pain or urinary changes.",
                "02/07",
                "Pt presents with headache that started yesterday 7:00 p.m. Patient reports chronic headache. He started having headache 2 years ago with similar presentation each time.  Headache occurs in about every 6-7 month and he's usually evaluated in the emergency room.  Patient describes headache as intermittent lasting for about 30 minutes, pounding in nature and 11/10 intensity.  Headache is usually associated with nausea, vomiting, photophobia, phonophobia and left-sided weakness.  He was previously taking meloxicam.  Patient denies fever, neck pain, chest pain, abdominal pain or urinary changes.",
              ],
              labStatus: "No labs ordered on 02/07/23.",
            },
            {
              name: "A421",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "75",
              accountNumber: "H00738075452",
              gender: "male",
              disease: "STROKE ALERT.",
              MR: "H000990957",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 02/02: St-Alert: Pt presented to hospital via EMS for aphasia and right facial droop.  According to EMS family stated when pt woke up this morning and sat down to eat breakfast family noticed pt was not talking. LKW yesterday evening at 9:00 p.m. prior to going to bed.  Patient is not currently taking any anticoagulants.",
                "02/02",
                "St-Alert: Pt presented to hospital via EMS for aphasia and right facial droop.  According to EMS family stated when pt woke up this morning and sat down to eat breakfast family noticed pt was not talking. LKW yesterday evening at 9:00 p.m. prior to going to bed.  Patient is not currently taking any anticoagulants.",
              ],
              labStatus:
                "A1c 6.4, TRIGLYCERIDES 136, CHOLESTEROL 122, LDL 87, HDL 34 L, TSH 2.33.",
            },
            {
              name: "A422",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "86",
              accountNumber: "H00738089312",
              gender: "male",
              disease:
                "diabetes, diverticulitis, Hypertension, Hyperlipidemia, Glaucoma,",
              MR: "H000150292",
              InsuranceCompany: "DSNP",
              history: [
                "S: 02/07: Pt presented intially on 2/4/23 to ED by EMS for evaluation of chest pain. Neurology is consulted for concering about left lower extremity weakness. ",
                "02/07",
                "Pt presented intially on 2/4/23 to ED by EMS for evaluation of chest pain. Neurology is consulted for concering about left lower extremity weakness. ",
              ],
              labStatus:
                "A1C 6.9 H, TRIGLYCERIDES 136, CHOLESTEROL 118, LDL 49, HDL 55, TSH 2.73.\n\nMRI BRAIN, MRI L-SPINE, UDS: PENDING.",
            },
            {
              name: "A423",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "A424",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'bocked',
              patientName: "John Doe",

              age: "30",
              accountNumber: "H00738103681",
              gender: "male",
              disease: "STROKE.",
              MR: "H001099672",
              InsuranceCompany: "MCD",
              history: [
                "S: 12/29: St-Alert: Pt, Taiwanese speaking male presented to hospital via EMS for left-sided weakness. Per pt's son pt was last seen normal at 8:00 p.m. last night prior to going to bed.  Pt's son found pt this morning with left-sided weakness and unable to speak. ",
                "12/29",
                "St-Alert: Pt, Taiwanese speaking male presented to hospital via EMS for left-sided weakness. Per pt's son pt was last seen normal at 8:00 p.m. last night prior to going to bed.  Pt's son found pt this morning with left-sided weakness and unable to speak. ",
              ],
              labStatus: "No labs ordered on 01/16/23.",
            },
            {
              name: "A425",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedbStatus:'bocked',
              patientName: "John Doe",
              age: "73",
              accountNumber: "H00737870899",
              gender: "male",
              disease: "STROKE.",
              MR: "H000993851",
              InsuranceCompany: "DSNP",
              history: [
                "S: 12/29: St-Alert: Pt, Taiwanese speaking male presented to hospital via EMS for left-sided weakness. Per pt's son pt was last seen normal at 8:00 p.m. last night prior to going to bed.  Pt's son found pt this morning with left-sided weakness and unable to speak. ",
                "12/29",
                "St-Alert: Pt, Taiwanese speaking male presented to hospital via EMS for left-sided weakness. Per pt's son pt was last seen normal at 8:00 p.m. last night prior to going to bed.  Pt's son found pt this morning with left-sided weakness and unable to speak. ",
              ],
              labStatus: "No labs ordered on 01/16/23.",
            },
            {
              name: "A426",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'bocked',
              patientName: "John Doe",

              age: "94",
              accountNumber: "H00738054244",
              gender: "male",
              disease: "diabetes.",
              MR: "H000260649",
              InsuranceCompany: "POS",
              history: [
                "S:  TELE 12/15: Telestroke called at 8:13 p.m., discussed with UC at 8:13 p.m.  Found unresponsive at home by his son.  Son was called by ER staff over a speaker phone.  He described that he last saw pt well at 1 p.m. and when he arrived at 5:45 p.m. pt was lying next to his bed, unresponsive, on the ground. Presently pt is unresponsive. We decided to do advanced imaging in addition to CT of the head.  CT of the head subsequently showed a diffuse subarachnoid hemorrhage. Discussed with Neuro IR Dr. Vaca who describes a basilar aneurysm. Pt's further management per ICU and Neurosurgery along with Neuro IR.  Blood pressure recommendations given to ER team for interim until these consultations are obtained. Subsequent message conveyed to ICU regarding Neuro IR, with whom they had already discussed case. Recommend neurosurgery eval as well for further management.",
                "12/15",
                "Telestroke called at 8:13 p.m., discussed with UC at 8:13 p.m.  Found unresponsive at home by his son.  Son was called by ER staff over a speaker phone.  He described that he last saw pt well at 1 p.m. and when he arrived at 5:45 p.m. pt was lying next to his bed, unresponsive, on the ground. Presently pt is unresponsive. We decided to do advanced imaging in addition to CT of the head.  CT of the head subsequently showed a diffuse subarachnoid hemorrhage. Discussed with Neuro IR Dr. Vaca who describes a basilar aneurysm. Pt's further management per ICU and Neurosurgery along with Neuro IR.  Blood pressure recommendations given to ER team for interim until these consultations are obtained. Subsequent message conveyed to ICU regarding Neuro IR, with whom they had already discussed case. Recommend neurosurgery eval as well for further management.",
              ],
              labStatus: "No labs ordered on 01/16/23.",
            },
            {
              name: "A427",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "A428",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "A429",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'bocked',
              patientName: "John Doe",

              age: "59",
              accountNumber: "H00737799998",
              gender: "male",
              disease: "stroke alert",
              MR: "H001180637",
              InsuranceCompany: "HCA",
              history: [
                "S:  TELE 12/15: Telestroke called at 8:13 p.m., discussed with UC at 8:13 p.m.  Found unresponsive at home by his son.  Son was called by ER staff over a speaker phone.  He described that he last saw pt well at 1 p.m. and when he arrived at 5:45 p.m. pt was lying next to his bed, unresponsive, on the ground. Presently pt is unresponsive. We decided to do advanced imaging in addition to CT of the head.  CT of the head subsequently showed a diffuse subarachnoid hemorrhage. Discussed with Neuro IR Dr. Vaca who describes a basilar aneurysm. Pt's further management per ICU and Neurosurgery along with Neuro IR.  Blood pressure recommendations given to ER team for interim until these consultations are obtained. Subsequent message conveyed to ICU regarding Neuro IR, with whom they had already discussed case. Recommend neurosurgery eval as well for further management.",
                "12/15",
                "Telestroke called at 8:13 p.m., discussed with UC at 8:13 p.m.  Found unresponsive at home by his son.  Son was called by ER staff over a speaker phone.  He described that he last saw pt well at 1 p.m. and when he arrived at 5:45 p.m. pt was lying next to his bed, unresponsive, on the ground. Presently pt is unresponsive. We decided to do advanced imaging in addition to CT of the head.  CT of the head subsequently showed a diffuse subarachnoid hemorrhage. Discussed with Neuro IR Dr. Vaca who describes a basilar aneurysm. Pt's further management per ICU and Neurosurgery along with Neuro IR.  Blood pressure recommendations given to ER team for interim until these consultations are obtained. Subsequent message conveyed to ICU regarding Neuro IR, with whom they had already discussed case. Recommend neurosurgery eval as well for further management.",
              ],
              labStatus: "No labs ordered on 01/16/23.",
            },
            {
              name: "A430",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
          ],
        },
      ],
    },
    // Level 5
    {
      name: "Level 5",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 10,
      Total_inpatients: 45,
      Potential_discharges_today: 5,
      Potential_discharges_tomorrow: 6,
      Available: 4,
      Total_blocked_beds: 2,
      children: [
        // Chamber 1
        {
          name: "A5-MED",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 4,
          Total_inpatients: 5,
          Potential_discharges_today: 3,
          Potential_discharges_tomorrow: 4,
          Available: 43,
          Total_blocked_beds: 4,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A501",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A502",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A503",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",

              age: "72",
              accountNumber: "H00738060641",
              gender: "male",
              disease: "STROKE.",
              MR: "H000001473",
              InsuranceCompany: "PPO",
              history: [
                "S: 02/05: HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
                "02/05",
                "HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
              ],
              labStatus: "B12 253, FOLATE 9.4\n\nTHIAMINE: PENDING.",
            },
            {
              name: "A504",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A505",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            // {
            //   name: "A506",
            //   color: "hsl(82, 70%, 50%)",
            //   loc: 50,
            //   type: "Seizure/ Epileptic disorder",
            //   bedStatus:'empty'
            // },
            // {
            //   name: "A507",
            //   color: "hsl(82, 70%, 50%)",
            //   loc: 50,
            //   type: "Seizure/ Epileptic disorder",
            //   bedStatus:'empty'
            // },
            // {
            //   name: "A508",
            //   color: "hsl(82, 70%, 50%)",
            //   loc: 50,
            //   type: "Seizure/ Epileptic disorder",
            //   bedStatus:'empty'
            // },
            // {
            //   name: "A509",
            //   color: "hsl(82, 70%, 50%)",
            //   loc: 50,
            //   type: "Seizure/ Epileptic disorder",
            //   bedStatus:'booked',
            //   patientName: "John Doe",

            //   age: "89",
            //   accountNumber: "H00738086948",
            //   gender: "male",
            //   disease: "hypertension, psoriasis, neuropathy, CAD",
            //   MR: "H001177473",
            //   InsuranceCompany: "PPO",
            //   history: [
            //     "S: 02/05: HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
            //     "02/05",
            //     "HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
            //   ],
            //   labStatus: "B12 253, FOLATE 9.4\n\nTHIAMINE: PENDING.",
            // },
            // {
            //   name: "A510",
            //   color: "hsl(82, 70%, 50%)",
            //   loc: 50,
            //   type: "Seizure/ Epileptic disorder",
            //   bedStatus:'empty'
            // },
          ],
        },
        // Chamber 2
        {
          name: "A5-PCU",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 4,
          Total_inpatients: 5,
          Potential_discharges_today: 3,
          Potential_discharges_tomorrow: 4,
          Available: 43,
          Total_blocked_beds: 4,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "A531",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A532",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A533",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",

              age: "72",
              accountNumber: "H00738060641",
              gender: "male",
              disease: "STROKE.",
              MR: "H000001473",
              InsuranceCompany: "PPO",
              history: [
                "S: 02/05: HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
                "02/05",
                "HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
              ],
              labStatus: "B12 253, FOLATE 9.4\n\nTHIAMINE: PENDING.",
            },
            {
              name: "A534",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A535",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A536",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A537",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A538",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "A539",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",

              age: "89",
              accountNumber: "H00738086948",
              gender: "male",
              disease: "hypertension, psoriasis, neuropathy, CAD",
              MR: "H001177473",
              InsuranceCompany: "PPO",
              history: [
                "S: 02/05: HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
                "02/05",
                "HPI was unable to obtain by pt due to altered mental status obtained by chart review.",
              ],
              labStatus: "B12 253, FOLATE 9.4\n\nTHIAMINE: PENDING.",
            },
            {
              name: "A540",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
          ],
        },
      ],
    },
  ],
};

export const TowerB = {
  name: "Tower B",
  color: "hsl(193, 70%, 50%)",
  children: [
    // Level 1
    {
      name: "Level 1",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 20,
      Total_inpatients: 6,
      Potential_discharges_today: 36,
      Potential_discharges_tomorrow: 34,
      Available: 64,
      Total_blocked_beds: 2,
      children: [
        // Chamber 1
        {
          name: "B1-ADMIT",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 64,
          Total_inpatients: 643,
          Potential_discharges_today: 4,
          Potential_discharges_tomorrow: 546,
          Available: 54,
          Total_blocked_beds: 45,
          color: "hsl(206, 70%, 50%)",
          children: [
            {
              name: "B101",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "B102",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "B103",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "B104",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B105",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B106",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B107",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B108",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B109",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'empty'
            },
            {
              name: "B110",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'empty'
            },
            {
              name: "B111",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'empty'
            },
            {
              name: "B112",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'empty'
            },
            {
              name: "B113",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'bocked',
              patientName: "John Doe",
              age: "28",
              accountNumber: "H00738095151",
              gender: "male",
              disease: "seizure disorder",
              MR: "H000913982",
              InsuranceCompany: "HMO",
              history: [
                "S:  ED 02/07:  Patient comes here today with a history of generalized headache in 9/10 not the worst headache of his life that started 2 days ago after he woke up like about 10:00 a.m.  Patient denies any trauma no vision loss no motor weakness no sensation loss no slurred speech.  Patient refers for the past 2 weeks has subjective fevers sore throat and weakness.  Patient is really concerned about his glucose levels and requested labs to be done.  No nausea no vomiting no diarrhea.  No abdominal pain no chest pain.  No back pain.  No cramping.  No covid-19 exposure no loss of taste or smell.  No cough.  NIHSS 0.",
                "02/07",
                "Patient comes here today with a history of generalized headache in 9/10 not the worst headache of his life that started 2 days ago after he woke up like about 10:00 a.m.  Patient denies any trauma no vision loss no motor weakness no sensation loss no slurred speech.  Patient refers for the past 2 weeks has subjective fevers sore throat and weakness.  Patient is really concerned about his glucose levels and requested labs to be done.  No nausea no vomiting no diarrhea.  No abdominal pain no chest pain.  No back pain.  No cramping.  No covid-19 exposure no loss of taste or smell.  No cough.  NIHSS 0.",
              ],
              labStatus: "B12 242, FOLATE 3.3, THIAMINE: PENDING.",
            },
            {
              name: "B114",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'empty'
            },
            {
              name: "B115",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Critical Patients",
              bedStatus:'empty'
            },
            {
              name: "B116",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B117",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B118",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B119",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B120",
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: 'B121',
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus: "empty"
            },
            {
              name: 'B122',
              color: "hsl(289, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus: "empty"
            }
          ],
        },
      ],
    },
    // Level 2
    {
      name: "Level 2",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 40,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        // Chamber 1
        {
          name: "B2-PED",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 64,
          Total_inpatients: 32,
          Potential_discharges_today: 25,
          Potential_discharges_tomorrow: 36,
          Available: 2,
          Total_blocked_beds: 6,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "B202",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B203",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B206",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B207",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B208",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
          ],
        },
        // Chamber 2
        {
          name: "B2-MED",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 64,
          Total_inpatients: 32,
          Potential_discharges_today: 25,
          Potential_discharges_tomorrow: 36,
          Available: 2,
          Total_blocked_beds: 6,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "B211",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B212",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B213",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B214",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B215",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B216",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B217",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B218",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B219",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B220",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus: 'empty'
            },
          ],
        },
      ],
    },
    // Level 3
    {
      name: "Level 3",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 30,
      Total_inpatients: 64,
      Potential_discharges_today: 5,
      Potential_discharges_tomorrow: 6,
      Available: 4,
      Total_blocked_beds: 7,
      children: [
        // Chamber 1
        {
          name: "B3-WMED",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "B301",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
             
            },
            {
              name: "B302",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'bocked',
              patientName: "John Doe",
              age: "40",
              accountNumber: "H00738063813",
              gender: "male",
              disease: "STROKE ALERT, SYNCOPE DYSARTHRIA.",
              MR: "H000867255",
              InsuranceCompany: "HCA",
              history: [
                "S: 02/01: Less than 50% bilateral ICA stenosis.",
                "02/01",
                "Less than 50% bilateral ICA stenosis.",
              ],
              labStatus: "No labs ordered on 02/02/23.",
            },
            {
              name: "B303",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
              
            },
            {
              name: "B304",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
             
            },
            {
              name: "B305",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",

              age: "63",
              accountNumber: "H00737510138",
              gender: "male",
              disease: "STROKE.",
              MR: "H001167328",
              InsuranceCompany: "HCA",
              history: [
                "S: 10/27: Pt presented to hospital as a transfer from South Shore Hospital for necrotizing fasciitis of lower right foot and DKA. Per chart review upon arrival to hospital pt was somnolent but arousable to sternal rub, would not answer questions or follow any commands. Overnight while pt in ICU patient seemed to be more somnolent with minimal responsiveness to sternal rub. Stroke alert was called, NIH of 9, patient was deemed not a candidate for tenecteplase or mechanical thrombectomy.  Patient then underwent emergent debridement for necrotizing fasciitis with toe amputation. Pt also has elevated troponins, Cardiology consulted for possible NSTEMI. ",
                "10/27",
                "Pt presented to hospital as a transfer from South Shore Hospital for necrotizing fasciitis of lower right foot and DKA. Per chart review upon arrival to hospital pt was somnolent but arousable to sternal rub, would not answer questions or follow any commands. Overnight while pt in ICU patient seemed to be more somnolent with minimal responsiveness to sternal rub. Stroke alert was called, NIH of 9, patient was deemed not a candidate for tenecteplase or mechanical thrombectomy.  Patient then underwent emergent debridement for necrotizing fasciitis with toe amputation. Pt also has elevated troponins, Cardiology consulted for possible NSTEMI. ",
              ],
              labStatus: "No labs ordered on 11/14/22",
            },
            {
              name: "B306",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "49",
              accountNumber: "H00738096381",
              gender: "male",
              disease: "STROKE.",
              MR: "H000525817",
              InsuranceCompany: "PPO",
              history: [
                "S:  ED 01/26:  43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
                "01/26",
                "43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
              ],
              labStatus:
                "U BENZO PRESUMPTIVE POSITIVE otherwise UDS NEGATIVE. A1c 5.2, TSH 0.97, TRIGLY 75, CHOLEST 116, LDL 55, HDL 47.",
            },
            {
              name: "B307",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "43",
              accountNumber: "H00738031892",
              gender: "male",
              disease: "STROKE",
              MR: "H001268644",
              InsuranceCompany: "HCA",
              history: [
                "S:  ED 01/26:  43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
                "01/26",
                "43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
              ],
              labStatus:
                "Vitamin B12 201 L, folic acid 11.8\n\nTHIAMINE: Pending.",
            },
            {
              name: "B308",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B309",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B310",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B311",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "34",
              accountNumber: "H00738092725",
              gender: "male",
              disease: "STROKE",
              MR: "H001083952",
              InsuranceCompany: "MEDICAID",
              history: [
                "S:  02/07:  Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
                "02/07",
                "Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
              ],
              labStatus:
                "Vitamin B12 201 L, folic acid 11.8\n\nTHIAMINE: Pending.",
            },
            {
              name: "B312",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "68",
              accountNumber: "H00738089538",
              gender: "male",
              disease: "diabetes and MS",
              MR: "H000528851",
              InsuranceCompany: "MCR",
              history: [
                "S:  02/07:  Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
                "02/07",
                "Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
              ],
              labStatus:
                "TRIGLYCERIDES 273, CHOLESTEROL 173, LDL 120, HDL 27\n\nPENDING:  CT BRAIN, MRI BRAIN, ECHO",
            },
            {
              name: "B313",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B314",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B315",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B316",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B317",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B318",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "73",
              accountNumber: "H00738088473",
              gender: "male",
              disease: "STROKE",
              MR: "H001279746",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 02/01: Pt presents to the hospital on 1/28/23 for further evaluation of increased dyspnea. Pt initially admitted to ICU for sepsis due to infection. Cardiology and pulmonary following. Neurology consulted for altered mental status. Pt has been downgraded to medical floor. Pt is alert, oriented to person, place, time, situation. Spouse at the bedside. Patient reports history of forgetfulness going on for some time, but most recently worsened since Saturday 01/28/23 in which the patient and spouse at the bedside describe him as not making sense when talking, visual disturbances, and vivid dreams. Pt knows he is in hospital, but reports earlier when he awoke from nap, he didn't know where he was. Patient denies symptoms of headache, vertigo/lightheadedness, visual changes, dysarthria, dysphagia, hemiplegia, paresthesias.",
                "02/01",
                "Pt presents to the hospital on 1/28/23 for further evaluation of increased dyspnea. Pt initially admitted to ICU for sepsis due to infection. Cardiology and pulmonary following. Neurology consulted for altered mental status. Pt has been downgraded to medical floor. Pt is alert, oriented to person, place, time, situation. Spouse at the bedside. Patient reports history of forgetfulness going on for some time, but most recently worsened since Saturday 01/28/23 in which the patient and spouse at the bedside describe him as not making sense when talking, visual disturbances, and vivid dreams. Pt knows he is in hospital, but reports earlier when he awoke from nap, he didn't know where he was. Patient denies symptoms of headache, vertigo/lightheadedness, visual changes, dysarthria, dysphagia, hemiplegia, paresthesias.",
              ],
              labStatus:
                "VIT B12 843, FOLATE 10.3.\n\nPENDING:  THIAMINE, MRI BRAIN, MRI C-SPINE, L-SPINE",
            },
            {
              name: "B319",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B320",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B321",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
             
            },
            {
              name: "B322",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'bocked',
              patientName: "John Doe",
              age: "40",
              accountNumber: "H00738063813",
              gender: "male",
              disease: "STROKE ALERT, SYNCOPE DYSARTHRIA.",
              MR: "H000867255",
              InsuranceCompany: "HCA",
              history: [
                "S: 02/01: Less than 50% bilateral ICA stenosis.",
                "02/01",
                "Less than 50% bilateral ICA stenosis.",
              ],
              labStatus: "No labs ordered on 02/02/23.",
            },
            {
              name: "B323",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
              
            },
            {
              name: "B324",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
             
            },
            {
              name: "B325",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "63",
              accountNumber: "H00737510138",
              gender: "male",
              disease: "STROKE.",
              MR: "H001167328",
              InsuranceCompany: "HCA",
              history: [
                "S: 10/27: Pt presented to hospital as a transfer from South Shore Hospital for necrotizing fasciitis of lower right foot and DKA. Per chart review upon arrival to hospital pt was somnolent but arousable to sternal rub, would not answer questions or follow any commands. Overnight while pt in ICU patient seemed to be more somnolent with minimal responsiveness to sternal rub. Stroke alert was called, NIH of 9, patient was deemed not a candidate for tenecteplase or mechanical thrombectomy.  Patient then underwent emergent debridement for necrotizing fasciitis with toe amputation. Pt also has elevated troponins, Cardiology consulted for possible NSTEMI. ",
                "10/27",
                "Pt presented to hospital as a transfer from South Shore Hospital for necrotizing fasciitis of lower right foot and DKA. Per chart review upon arrival to hospital pt was somnolent but arousable to sternal rub, would not answer questions or follow any commands. Overnight while pt in ICU patient seemed to be more somnolent with minimal responsiveness to sternal rub. Stroke alert was called, NIH of 9, patient was deemed not a candidate for tenecteplase or mechanical thrombectomy.  Patient then underwent emergent debridement for necrotizing fasciitis with toe amputation. Pt also has elevated troponins, Cardiology consulted for possible NSTEMI. ",
              ],
              labStatus: "No labs ordered on 11/14/22",
            },
            {
              name: "B326",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "49",
              accountNumber: "H00738096381",
              gender: "male",
              disease: "STROKE.",
              MR: "H000525817",
              InsuranceCompany: "PPO",
              history: [
                "S:  ED 01/26:  43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
                "01/26",
                "43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
              ],
              labStatus:
                "U BENZO PRESUMPTIVE POSITIVE otherwise UDS NEGATIVE. A1c 5.2, TSH 0.97, TRIGLY 75, CHOLEST 116, LDL 55, HDL 47.",
            },
            {
              name: "B327",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "43",
              accountNumber: "H00738031892",
              gender: "male",
              disease: "STROKE",
              MR: "H001268644",
              InsuranceCompany: "HCA",
              history: [
                "S:  ED 01/26:  43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
                "01/26",
                "43-year-old female presents with acute on chronic back pain.  She says she fell 4 months ago and had thoracic spine fusions approximately 4 months ago T GH.  Here in December for Staph bacteremia.  Patient states he fell again yesterday while ambulating fell on her butt and has increased pain to her spine, thoracic area.  Denies any fever denies chest pain or chest discomfort or shortness of breath no headache no vomiting.  Max pain 10/10 current pain 10 in 10 brought in by EMS.",
              ],
              labStatus:
                "Vitamin B12 201 L, folic acid 11.8\n\nTHIAMINE: Pending.",
            },
            {
              name: "B328",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B329",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B330",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B331",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "34",
              accountNumber: "H00738092725",
              gender: "male",
              disease: "STROKE",
              MR: "H001083952",
              InsuranceCompany: "MEDICAID",
              history: [
                "S:  02/07:  Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
                "02/07",
                "Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
              ],
              labStatus:
                "Vitamin B12 201 L, folic acid 11.8\n\nTHIAMINE: Pending.",
            },
            {
              name: "B332",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "68",
              accountNumber: "H00738089538",
              gender: "male",
              disease: "diabetes and MS",
              MR: "H000528851",
              InsuranceCompany: "MCR",
              history: [
                "S:  02/07:  Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
                "02/07",
                "Patient presents initially on (2/5/23) with shortness of breath and fever. Patient is awake, alert and oriented to self only however has difficulty expressing herself.  Patient was recently seen in January for acute encephalopathy secondary to COVID-19.  Currently patient denies facial weakness, extremity weakness or numbness.  Neurology was consulted for aphasia. According to son, patient had similar symptoms during her prior visit that resolved then returned few days after discharge. Symptoms has been going on 3 weeks now. Patient denies vaccination to COVID-19. Patient has not used her CPAP in awhile due to recall.  CTA head/neck in 1/11/23 negative.  Patient still positive for COVID-19.",
              ],
              labStatus:
                "TRIGLYCERIDES 273, CHOLESTEROL 173, LDL 120, HDL 27\n\nPENDING:  CT BRAIN, MRI BRAIN, ECHO",
            },
            {
              name: "B333",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Seizure/ Epileptic disorder",
              bedStatus:'empty'
            },
            {
              name: "B334",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B335",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B336",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B337",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B338",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'booked',
              patientName: "John Doe",
              age: "73",
              accountNumber: "H00738088473",
              gender: "male",
              disease: "STROKE",
              MR: "H001279746",
              InsuranceCompany: "MEDICARE",
              history: [
                "S: 02/01: Pt presents to the hospital on 1/28/23 for further evaluation of increased dyspnea. Pt initially admitted to ICU for sepsis due to infection. Cardiology and pulmonary following. Neurology consulted for altered mental status. Pt has been downgraded to medical floor. Pt is alert, oriented to person, place, time, situation. Spouse at the bedside. Patient reports history of forgetfulness going on for some time, but most recently worsened since Saturday 01/28/23 in which the patient and spouse at the bedside describe him as not making sense when talking, visual disturbances, and vivid dreams. Pt knows he is in hospital, but reports earlier when he awoke from nap, he didn't know where he was. Patient denies symptoms of headache, vertigo/lightheadedness, visual changes, dysarthria, dysphagia, hemiplegia, paresthesias.",
                "02/01",
                "Pt presents to the hospital on 1/28/23 for further evaluation of increased dyspnea. Pt initially admitted to ICU for sepsis due to infection. Cardiology and pulmonary following. Neurology consulted for altered mental status. Pt has been downgraded to medical floor. Pt is alert, oriented to person, place, time, situation. Spouse at the bedside. Patient reports history of forgetfulness going on for some time, but most recently worsened since Saturday 01/28/23 in which the patient and spouse at the bedside describe him as not making sense when talking, visual disturbances, and vivid dreams. Pt knows he is in hospital, but reports earlier when he awoke from nap, he didn't know where he was. Patient denies symptoms of headache, vertigo/lightheadedness, visual changes, dysarthria, dysphagia, hemiplegia, paresthesias.",
              ],
              labStatus:
                "VIT B12 843, FOLATE 10.3.\n\nPENDING:  THIAMINE, MRI BRAIN, MRI C-SPINE, L-SPINE",
            },
            {
              name: "B339",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
            {
              name: "B340",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Stroke",
              bedStatus:'empty'
            },
          ],
        },
      ],
    },
  ],
};

export const TowerC = {
  name: "Tower C",
  color: "hsl(193, 70%, 50%)",

  children: [
    // Level 2
    {
      name: "Level 2",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 75,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        // Chamber 1
        {
          name: "C2-MED",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(216, 70%, 50%)",
          loc: 50,
          children: [
            {
              name: "C209",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C210",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C211",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C226",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C227",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C228",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C229",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C230",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C231",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C232",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C233",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C234",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
          ],
        },
        // Chamber 2
        {
          name: "C2-GYN",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(216, 70%, 50%)",
          loc: 50,
          children: [
            {
              name: "C212",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C213",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C214",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C215",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C216",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C217",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C218",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C219",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C220",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C221",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C222",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C223",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C224",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C225",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
          ],
        },
      ],
    },
    // Level 3
    {
      name: "Level 3",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 75,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        // Chamber 1
        {
          name: "C3-MAB",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          color: "hsl(216, 70%, 50%)",
          loc: 50,
          children: [
            {
              name: "C305",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C306",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C309",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C310",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C311",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C312",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C314",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
            {
              name: "C328",
              color: "hsl(82, 70%, 50%)",
              loc: 50,
              type: "Neuropathies",
              bedStatus:'empty'
            },
          ],
        },
      ],
    },
  ],
};

export const TowerD = {
  name: "Tower D",
  color: "hsl(206, 70%, 50%)",
  children: [
    // Level 2
    {
      name: "Level 2",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 59,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        {
          name: "D2-WEST-REHAB",
          color: "hsl(206, 70%, 50%)",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          loc: 50,
          children: [
            { name: "D201", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D202", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D203", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D204", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D206", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D208", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D209", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D210", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D211", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D213", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D214", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D216", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D217", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D218", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D219", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D220", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D221", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D223", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
          ],
        },
      ],
    },
    // Level 3
    {
      name: "Level 3",
      Inpatient_occupancy: "100%",
      Total_inpatient_beds: 59,
      Total_inpatients: 30,
      Potential_discharges_today: 2,
      Potential_discharges_tomorrow: 6,
      Available: 0,
      Total_blocked_beds: 0,
      children: [
        {
          name: "D3-MED",
          color: "hsl(206, 70%, 50%)",
          Inpatient_occupancy: "100%",
          Total_inpatient_beds: 30,
          Total_inpatients: 30,
          Potential_discharges_today: 2,
          Potential_discharges_tomorrow: 6,
          Available: 0,
          Total_blocked_beds: 0,
          loc: 50,
          children: [
            { name: "D301", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D302", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D303", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D304", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D305", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D306", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D307", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D308", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D309", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D310", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D311", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D312", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D313", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D314", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D315", color: "hsl(206, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D316", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D317", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D318", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D319", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D320", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D321", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D322", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D323", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
            { name: "D324", color: "hsl(82, 70%, 50%)", loc: 50, type: "Neuropathies", bedStatus: 'empty' },
          ],
        },
      ],
    },
  ],
};
