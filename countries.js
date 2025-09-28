const countries = [
  {
    "name_en": "Afghanistan",
    "name_fr": "Afghanistan",
    "dial_code": "+93",
    "code": "AF",
    "flag": "🇦🇫"
  },
  {
    "name_en": "South Africa",
    "name_fr": "Afrique du Sud",
    "dial_code": "+27",
    "code": "ZA",
    "flag": "🇿🇦"
  },
  {
    "name_en": "Åland Islands",
    "name_fr": "Åland",
    "dial_code": "+358",
    "code": "AX",
    "flag": "🇦🇽"
  },
  {
    "name_en": "Albania",
    "name_fr": "Albanie",
    "dial_code": "+355",
    "code": "AL",
    "flag": "🇦🇱"
  },
  {
    "name_en": "Algeria",
    "name_fr": "Algérie",
    "dial_code": "+213",
    "code": "DZ",
    "flag": "🇩🇿"
  },
  {
    "name_en": "Germany",
    "name_fr": "Allemagne",
    "dial_code": "+49",
    "code": "DE",
    "flag": "🇩🇪"
  },
  {
    "name_en": "Andorra",
    "name_fr": "Andorre",
    "dial_code": "+376",
    "code": "AD",
    "flag": "🇦🇩"
  },
  {
    "name_en": "Angola",
    "name_fr": "Angola",
    "dial_code": "+244",
    "code": "AO",
    "flag": "🇦🇴"
  },
  {
    "name_en": "Anguilla",
    "name_fr": "Anguilla",
    "dial_code": "+1264",
    "code": "AI",
    "flag": "🇦🇮"
  },
  {
    "name_en": "Antarctica",
    "name_fr": "Antarctique",
    "dial_code": "+672",
    "code": "AQ",
    "flag": "🇦🇶"
  },
  {
    "name_en": "Antigua and Barbuda",
    "name_fr": "Antigua-et-Barbuda",
    "dial_code": "+1268",
    "code": "AG",
    "flag": "🇦🇬"
  },
  {
    "name_en": "Saudi Arabia",
    "name_fr": "Arabie saoudite",
    "dial_code": "+966",
    "code": "SA",
    "flag": "🇸🇦"
  },
  {
    "name_en": "Argentina",
    "name_fr": "Argentine",
    "dial_code": "+54",
    "code": "AR",
    "flag": "🇦🇷"
  },
  {
    "name_en": "Armenia",
    "name_fr": "Arménie",
    "dial_code": "+374",
    "code": "AM",
    "flag": "🇦🇲"
  },
  {
    "name_en": "Aruba",
    "name_fr": "Aruba",
    "dial_code": "+297",
    "code": "AW",
    "flag": "🇦🇼"
  },
  {
    "name_en": "Australia",
    "name_fr": "Australie",
    "dial_code": "+61",
    "code": "AU",
    "flag": "🇦🇺"
  },
  {
    "name_en": "Austria",
    "name_fr": "Autriche",
    "dial_code": "+43",
    "code": "AT",
    "flag": "🇦🇹"
  },
  {
    "name_en": "Azerbaijan",
    "name_fr": "Azerbaïdjan",
    "dial_code": "+994",
    "code": "AZ",
    "flag": "🇦🇿"
  },
  {
    "name_en": "Bahamas",
    "name_fr": "Bahamas",
    "dial_code": "+1242",
    "code": "BS",
    "flag": "🇧🇸"
  },
  {
    "name_en": "Bahrain",
    "name_fr": "Bahreïn",
    "dial_code": "+973",
    "code": "BH",
    "flag": "🇧🇭"
  },
  {
    "name_en": "Bangladesh",
    "name_fr": "Bangladesh",
    "dial_code": "+880",
    "code": "BD",
    "flag": "🇧🇩"
  },
  {
    "name_en": "Barbados",
    "name_fr": "Barbade",
    "dial_code": "+1246",
    "code": "BB",
    "flag": "🇧🇧"
  },
  {
    "name_en": "Belarus",
    "name_fr": "Biélorussie",
    "dial_code": "+375",
    "code": "BY",
    "flag": "🇧🇾"
  },
  {
    "name_en": "Belgium",
    "name_fr": "Belgique",
    "dial_code": "+32",
    "code": "BE",
    "flag": "🇧🇪"
  },
  {
    "name_en": "Belize",
    "name_fr": "Belize",
    "dial_code": "+501",
    "code": "BZ",
    "flag": "🇧🇿"
  },
  {
    "name_en": "Bermuda",
    "name_fr": "Bermudes",
    "dial_code": "+1441",
    "code": "BM",
    "flag": "🇧🇲"
  },
  {
    "name_en": "Bhutan",
    "name_fr": "Bhoutan",
    "dial_code": "+975",
    "code": "BT",
    "flag": "🇧🇹"
  },
  {
    "name_en": "Bolivia",
    "name_fr": "Bolivie",
    "dial_code": "+591",
    "code": "BO",
    "flag": "🇧🇴"
  },
  {
    "name_en": "Bosnia and Herzegovina",
    "name_fr": "Bosnie-Herzégovine",
    "dial_code": "+387",
    "code": "BA",
    "flag": "🇧🇦"
  },
  {
    "name_en": "Botswana",
    "name_fr": "Botswana",
    "dial_code": "+267",
    "code": "BW",
    "flag": "🇧🇼"
  },
  {
    "name_en": "Brazil",
    "name_fr": "Brésil",
    "dial_code": "+55",
    "code": "BR",
    "flag": "🇧🇷"
  },
  {
    "name_en": "Brunei",
    "name_fr": "Brunei",
    "dial_code": "+673",
    "code": "BN",
    "flag": "🇧🇳"
  },
  {
    "name_en": "Bulgaria",
    "name_fr": "Bulgarie",
    "dial_code": "+359",
    "code": "BG",
    "flag": "🇧🇬"
  },
  {
    "name_en": "Burkina Faso",
    "name_fr": "Burkina Faso",
    "dial_code": "+226",
    "code": "BF",
    "flag": "🇧🇫"
  },
  {
    "name_en": "Burundi",
    "name_fr": "Burundi",
    "dial_code": "+257",
    "code": "BI",
    "flag": "🇧🇮"
  },
  {
    "name_en": "Benin",
    "name_fr": "Bénin",
    "dial_code": "+229",
    "code": "BJ",
    "flag": "🇧🇯"
  },
  {
    "name_en": "Saint Barthélemy",
    "name_fr": "Saint-Barthélemy",
    "dial_code": "+590",
    "code": "BL",
    "flag": "🇧🇱"
  },
  {
    "name_en": "Cambodia",
    "name_fr": "Cambodge",
    "dial_code": "+855",
    "code": "KH",
    "flag": "🇰🇭"
  },
  {
    "name_en": "Cameroon",
    "name_fr": "Cameroun",
    "dial_code": "+237",
    "code": "CM",
    "flag": "🇨🇲"
  },
  {
    "name_en": "Canada",
    "name_fr": "Canada",
    "dial_code": "+1",
    "code": "CA",
    "flag": "🇨🇦"
  },
  {
    "name_en": "Cape Verde",
    "name_fr": "Cap-Vert",
    "dial_code": "+238",
    "code": "CV",
    "flag": "🇨🇻"
  },
  {
    "name_en": "Chile",
    "name_fr": "Chili",
    "dial_code": "+56",
    "code": "CL",
    "flag": "🇨🇱"
  },
  {
    "name_en": "China",
    "name_fr": "Chine",
    "dial_code": "+86",
    "code": "CN",
    "flag": "🇨🇳"
  },
  {
    "name_en": "Cyprus",
    "name_fr": "Chypre",
    "dial_code": "+357",
    "code": "CY",
    "flag": "🇨🇾"
  },
  {
    "name_en": "Colombia",
    "name_fr": "Colombie",
    "dial_code": "+57",
    "code": "CO",
    "flag": "🇨🇴"
  },
  {
    "name_en": "Comoros",
    "name_fr": "Comores",
    "dial_code": "+269",
    "code": "KM",
    "flag": "🇰🇲"
  },
  {
    "name_en": "Congo",
    "name_fr": "Congo",
    "dial_code": "+242",
    "code": "CG",
    "flag": "🇨🇬"
  },
  {
    "name_en": "Congo (DRC)",
    "name_fr": "Congo (RDC)",
    "dial_code": "+243",
    "code": "CD",
    "flag": "🇨🇩"
  },
  {
    "name_en": "North Korea",
    "name_fr": "Corée du Nord",
    "dial_code": "+850",
    "code": "KP",
    "flag": "🇰🇵"
  },
  {
    "name_en": "South Korea",
    "name_fr": "Corée du Sud",
    "dial_code": "+82",
    "code": "KR",
    "flag": "🇰🇷"
  },
  {
    "name_en": "Costa Rica",
    "name_fr": "Costa Rica",
    "dial_code": "+506",
    "code": "CR",
    "flag": "🇨🇷"
  },
  {
    "name_en": "Croatia",
    "name_fr": "Croatie",
    "dial_code": "+385",
    "code": "HR",
    "flag": "🇭🇷"
  },
  {
    "name_en": "Cuba",
    "name_fr": "Cuba",
    "dial_code": "+53",
    "code": "CU",
    "flag": "🇨🇺"
  },
  {
    "name_en": "Curaçao",
    "name_fr": "Curaçao",
    "dial_code": "+599",
    "code": "CW",
    "flag": "🇨🇼"
  },
  {
    "name_en": "Côte d’Ivoire",
    "name_fr": "Côte d’Ivoire",
    "dial_code": "+225",
    "code": "CI",
    "flag": "🇨🇮"
  },
  {
    "name_en": "Denmark",
    "name_fr": "Danemark",
    "dial_code": "+45",
    "code": "DK",
    "flag": "🇩🇰"
  },
  {
    "name_en": "Djibouti",
    "name_fr": "Djibouti",
    "dial_code": "+253",
    "code": "DJ",
    "flag": "🇩🇯"
  },
  {
    "name_en": "Dominica",
    "name_fr": "Dominique",
    "dial_code": "+1767",
    "code": "DM",
    "flag": "🇩🇲"
  },
  {
    "name_en": "Egypt",
    "name_fr": "Égypte",
    "dial_code": "+20",
    "code": "EG",
    "flag": "🇪🇬"
  },
  {
    "name_en": "El Salvador",
    "name_fr": "Salvador",
    "dial_code": "+503",
    "code": "SV",
    "flag": "🇸🇻"
  },
  {
    "name_en": "Eritrea",
    "name_fr": "Érythrée",
    "dial_code": "+291",
    "code": "ER",
    "flag": "🇪🇷"
  },
  {
    "name_en": "Spain",
    "name_fr": "Espagne",
    "dial_code": "+34",
    "code": "ES",
    "flag": "🇪🇸"
  },
  {
    "name_en": "Estonia",
    "name_fr": "Estonie",
    "dial_code": "+372",
    "code": "EE",
    "flag": "🇪🇪"
  },
  {
    "name_en": "Eswatini",
    "name_fr": "Eswatini",
    "dial_code": "+268",
    "code": "SZ",
    "flag": "🇸🇿"
  },
  {
    "name_en": "Ethiopia",
    "name_fr": "Éthiopie",
    "dial_code": "+251",
    "code": "ET",
    "flag": "🇪🇹"
  },
  {
    "name_en": "Fiji",
    "name_fr": "Fidji",
    "dial_code": "+679",
    "code": "FJ",
    "flag": "🇫🇯"
  },
  {
    "name_en": "Finland",
    "name_fr": "Finlande",
    "dial_code": "+358",
    "code": "FI",
    "flag": "🇫🇮"
  },
  {
    "name_en": "France",
    "name_fr": "France",
    "dial_code": "+33",
    "code": "FR",
    "flag": "🇫🇷"
  },
  {
    "name_en": "Gabon",
    "name_fr": "Gabon",
    "dial_code": "+241",
    "code": "GA",
    "flag": "🇬🇦"
  },
  {
    "name_en": "Gambia",
    "name_fr": "Gambie",
    "dial_code": "+220",
    "code": "GM",
    "flag": "🇬🇲"
  },
  {
    "name_en": "Ghana",
    "name_fr": "Ghana",
    "dial_code": "+233",
    "code": "GH",
    "flag": "🇬🇭"
  },
  {
    "name_en": "Gibraltar",
    "name_fr": "Gibraltar",
    "dial_code": "+350",
    "code": "GI",
    "flag": "🇬🇮"
  },
  {
    "name_en": "Grenada",
    "name_fr": "Grenade",
    "dial_code": "+1473",
    "code": "GD",
    "flag": "🇬🇩"
  },
  {
    "name_en": "Greenland",
    "name_fr": "Groenland",
    "dial_code": "+299",
    "code": "GL",
    "flag": "🇬🇱"
  },
  {
    "name_en": "Guadeloupe",
    "name_fr": "Guadeloupe",
    "dial_code": "+590",
    "code": "GP",
    "flag": "🇬🇵"
  },
  {
    "name_en": "Guam",
    "name_fr": "Guam",
    "dial_code": "+1671",
    "code": "GU",
    "flag": "🇬🇺"
  },
  {
    "name_en": "Guatemala",
    "name_fr": "Guatemala",
    "dial_code": "+502",
    "code": "GT",
    "flag": "🇬🇹"
  },
  {
    "name_en": "Guernsey",
    "name_fr": "Guernesey",
    "dial_code": "+44",
    "code": "GG",
    "flag": "🇬🇬"
  },
  {
    "name_en": "Guinea",
    "name_fr": "Guinée",
    "dial_code": "+224",
    "code": "GN",
    "flag": "🇬🇳"
  },
  {
    "name_en": "Equatorial Guinea",
    "name_fr": "Guinée équatoriale",
    "dial_code": "+240",
    "code": "GQ",
    "flag": "🇬🇶"
  },
  {
    "name_en": "Guinea-Bissau",
    "name_fr": "Guinée-Bissau",
    "dial_code": "+245",
    "code": "GW",
    "flag": "🇬🇼"
  },
  {
    "name_en": "Guyana",
    "name_fr": "Guyana",
    "dial_code": "+592",
    "code": "GY",
    "flag": "🇬🇾"
  },
  {
    "name_en": "French Guiana",
    "name_fr": "Guyane française",
    "dial_code": "+594",
    "code": "GF",
    "flag": "🇬🇫"
  },
  {
    "name_en": "Georgia",
    "name_fr": "Géorgie",
    "dial_code": "+995",
    "code": "GE",
    "flag": "🇬🇪"
  },
  {
    "name_en": "South Georgia",
    "name_fr": "Géorgie du Sud-et-les Îles Sandwich du Sud",
    "dial_code": "+500",
    "code": "GS",
    "flag": "🇬🇸"
  },
  {
    "name_en": "Greece",
    "name_fr": "Grèce",
    "dial_code": "+30",
    "code": "GR",
    "flag": "🇬🇷"
  },
  {
    "name_en": "Haiti",
    "name_fr": "Haïti",
    "dial_code": "+509",
    "code": "HT",
    "flag": "🇭🇹"
  },
  {
    "name_en": "Honduras",
    "name_fr": "Honduras",
    "dial_code": "+504",
    "code": "HN",
    "flag": "🇭🇳"
  },
  {
    "name_en": "Hong Kong",
    "name_fr": "Hong Kong",
    "dial_code": "+852",
    "code": "HK",
    "flag": "🇭🇰"
  },
  {
    "name_en": "Hungary",
    "name_fr": "Hongrie",
    "dial_code": "+36",
    "code": "HU",
    "flag": "🇭🇺"
  },
  {
    "name_en": "India",
    "name_fr": "Inde",
    "dial_code": "+91",
    "code": "IN",
    "flag": "🇮🇳"
  },
  {
    "name_en": "Indonesia",
    "name_fr": "Indonésie",
    "dial_code": "+62",
    "code": "ID",
    "flag": "🇮🇩"
  },
  {
    "name_en": "Iran",
    "name_fr": "Iran",
    "dial_code": "+98",
    "code": "IR",
    "flag": "🇮🇷"
  },
  {
    "name_en": "Iraq",
    "name_fr": "Irak",
    "dial_code": "+964",
    "code": "IQ",
    "flag": "🇮🇶"
  },
  {
    "name_en": "Ireland",
    "name_fr": "Irlande",
    "dial_code": "+353",
    "code": "IE",
    "flag": "🇮🇪"
  },
  {
    "name_en": "Iceland",
    "name_fr": "Islande",
    "dial_code": "+354",
    "code": "IS",
    "flag": "🇮🇸"
  },
  {
    "name_en": "Israel",
    "name_fr": "Israël",
    "dial_code": "+972",
    "code": "IL",
    "flag": "🇮🇱"
  },
  {
    "name_en": "Italy",
    "name_fr": "Italie",
    "dial_code": "+39",
    "code": "IT",
    "flag": "🇮🇹"
  },
  {
    "name_en": "Jamaica",
    "name_fr": "Jamaïque",
    "dial_code": "+1876",
    "code": "JM",
    "flag": "🇯🇲"
  },
  {
    "name_en": "Japan",
    "name_fr": "Japon",
    "dial_code": "+81",
    "code": "JP",
    "flag": "🇯🇵"
  },
  {
    "name_en": "Jersey",
    "name_fr": "Jersey",
    "dial_code": "+44",
    "code": "JE",
    "flag": "🇯🇪"
  },
  {
    "name_en": "Jordan",
    "name_fr": "Jordanie",
    "dial_code": "+962",
    "code": "JO",
    "flag": "🇯🇴"
  },
  {
    "name_en": "Kazakhstan",
    "name_fr": "Kazakhstan",
    "dial_code": "+7",
    "code": "KZ",
    "flag": "🇰🇿"
  },
  {
    "name_en": "Kenya",
    "name_fr": "Kenya",
    "dial_code": "+254",
    "code": "KE",
    "flag": "🇰🇪"
  },
  {
    "name_en": "Kyrgyzstan",
    "name_fr": "Kirghizistan",
    "dial_code": "+996",
    "code": "KG",
    "flag": "🇰🇬"
  },
  {
    "name_en": "Kiribati",
    "name_fr": "Kiribati",
    "dial_code": "+686",
    "code": "KI",
    "flag": "🇰🇮"
  },
  {
    "name_en": "Kosovo",
    "name_fr": "Kosovo",
    "dial_code": "+383",
    "code": "XK",
    "flag": "🇽🇰"
  },
  {
    "name_en": "Kuwait",
    "name_fr": "Koweït",
    "dial_code": "+965",
    "code": "KW",
    "flag": "🇰🇼"
  },
  {
    "name_en": "Laos",
    "name_fr": "Laos",
    "dial_code": "+856",
    "code": "LA",
    "flag": "🇱🇦"
  },
  {
    "name_en": "Lesotho",
    "name_fr": "Lesotho",
    "dial_code": "+266",
    "code": "LS",
    "flag": "🇱🇸"
  },
  {
    "name_en": "Latvia",
    "name_fr": "Lettonie",
    "dial_code": "+371",
    "code": "LV",
    "flag": "🇱🇻"
  },
  {
    "name_en": "Lebanon",
    "name_fr": "Liban",
    "dial_code": "+961",
    "code": "LB",
    "flag": "🇱🇧"
  },
  {
    "name_en": "Liberia",
    "name_fr": "Liberia",
    "dial_code": "+231",
    "code": "LR",
    "flag": "🇱🇷"
  },
  {
    "name_en": "Libya",
    "name_fr": "Libye",
    "dial_code": "+218",
    "code": "LY",
    "flag": "🇱🇾"
  },
  {
    "name_en": "Liechtenstein",
    "name_fr": "Liechtenstein",
    "dial_code": "+423",
    "code": "LI",
    "flag": "🇱🇮"
  },
  {
    "name_en": "Lithuania",
    "name_fr": "Lituanie",
    "dial_code": "+370",
    "code": "LT",
    "flag": "🇱🇹"
  },
  {
    "name_en": "Luxembourg",
    "name_fr": "Luxembourg",
    "dial_code": "+352",
    "code": "LU",
    "flag": "🇱🇺"
  },
  {
    "name_en": "Macau",
    "name_fr": "Macao",
    "dial_code": "+853",
    "code": "MO",
    "flag": "🇲🇴"
  },
  {
    "name_en": "Madagascar",
    "name_fr": "Madagascar",
    "dial_code": "+261",
    "code": "MG",
    "flag": "🇲🇬"
  },
  {
    "name_en": "Malaysia",
    "name_fr": "Malaisie",
    "dial_code": "+60",
    "code": "MY",
    "flag": "🇲🇾"
  },
  {
    "name_en": "Malawi",
    "name_fr": "Malawi",
    "dial_code": "+265",
    "code": "MW",
    "flag": "🇲🇼"
  },
  {
    "name_en": "Maldives",
    "name_fr": "Maldives",
    "dial_code": "+960",
    "code": "MV",
    "flag": "🇲🇻"
  },
  {
    "name_en": "Mali",
    "name_fr": "Mali",
    "dial_code": "+223",
    "code": "ML",
    "flag": "🇲🇱"
  },
  {
    "name_en": "Malta",
    "name_fr": "Malte",
    "dial_code": "+356",
    "code": "MT",
    "flag": "🇲🇹"
  },
  {
    "name_en": "Morocco",
    "name_fr": "Maroc",
    "dial_code": "+212",
    "code": "MA",
    "flag": "🇲🇦"
  },
  {
    "name_en": "Martinique",
    "name_fr": "Martinique",
    "dial_code": "+596",
    "code": "MQ",
    "flag": "🇲🇶"
  },
  {
    "name_en": "Mauritius",
    "name_fr": "Maurice",
    "dial_code": "+230",
    "code": "MU",
    "flag": "🇲🇺"
  },
  {
    "name_en": "Mauritania",
    "name_fr": "Mauritanie",
    "dial_code": "+222",
    "code": "MR",
    "flag": "🇲🇷"
  },
  {
    "name_en": "Mayotte",
    "name_fr": "Mayotte",
    "dial_code": "+262",
    "code": "YT",
    "flag": "🇾🇹"
  },
  {
    "name_en": "Mexico",
    "name_fr": "Mexique",
    "dial_code": "+52",
    "code": "MX",
    "flag": "🇲🇽"
  },
  {
    "name_en": "Micronesia",
    "name_fr": "Micronésie",
    "dial_code": "+691",
    "code": "FM",
    "flag": "🇫🇲"
  },
  {
    "name_en": "Moldova",
    "name_fr": "Moldavie",
    "dial_code": "+373",
    "code": "MD",
    "flag": "🇲🇩"
  },
  {
    "name_en": "Monaco",
    "name_fr": "Monaco",
    "dial_code": "+377",
    "code": "MC",
    "flag": "🇲🇨"
  },
  {
    "name_en": "Mongolia",
    "name_fr": "Mongolie",
    "dial_code": "+976",
    "code": "MN",
    "flag": "🇲🇳"
  },
  {
    "name_en": "Montserrat",
    "name_fr": "Montserrat",
    "dial_code": "+1664",
    "code": "MS",
    "flag": "🇲🇸"
  },
  {
    "name_en": "Montenegro",
    "name_fr": "Monténégro",
    "dial_code": "+382",
    "code": "ME",
    "flag": "🇲🇪"
  },
  {
    "name_en": "Mozambique",
    "name_fr": "Mozambique",
    "dial_code": "+258",
    "code": "MZ",
    "flag": "🇲🇿"
  },
  {
    "name_en": "Myanmar",
    "name_fr": "Myanmar",
    "dial_code": "+95",
    "code": "MM",
    "flag": "🇲🇲"
  },
  {
    "name_en": "Namibia",
    "name_fr": "Namibie",
    "dial_code": "+264",
    "code": "NA",
    "flag": "🇳🇦"
  },
  {
    "name_en": "Nauru",
    "name_fr": "Nauru",
    "dial_code": "+674",
    "code": "NR",
    "flag": "🇳🇷"
  },
  {
    "name_en": "Nicaragua",
    "name_fr": "Nicaragua",
    "dial_code": "+505",
    "code": "NI",
    "flag": "🇳🇮"
  },
  {
    "name_en": "Niger",
    "name_fr": "Niger",
    "dial_code": "+227",
    "code": "NE",
    "flag": "🇳🇪"
  },
  {
    "name_en": "Nigeria",
    "name_fr": "Nigeria",
    "dial_code": "+234",
    "code": "NG",
    "flag": "🇳🇬"
  },
  {
    "name_en": "Niue",
    "name_fr": "Niue",
    "dial_code": "+683",
    "code": "NU",
    "flag": "🇳🇺"
  },
  {
    "name_en": "Norway",
    "name_fr": "Norvège",
    "dial_code": "+47",
    "code": "NO",
    "flag": "🇳🇴"
  },
  {
    "name_en": "New Caledonia",
    "name_fr": "Nouvelle-Calédonie",
    "dial_code": "+687",
    "code": "NC",
    "flag": "🇳🇨"
  },
  {
    "name_en": "New Zealand",
    "name_fr": "Nouvelle-Zélande",
    "dial_code": "+64",
    "code": "NZ",
    "flag": "🇳🇿"
  },
  {
    "name_en": "Nepal",
    "name_fr": "Népal",
    "dial_code": "+977",
    "code": "NP",
    "flag": "🇳🇵"
  },
  {
    "name_en": "Oman",
    "name_fr": "Oman",
    "dial_code": "+968",
    "code": "OM",
    "flag": "🇴🇲"
  },
  {
    "name_en": "Uganda",
    "name_fr": "Ouganda",
    "dial_code": "+256",
    "code": "UG",
    "flag": "🇺🇬"
  },
  {
    "name_en": "Uzbekistan",
    "name_fr": "Ouzbékistan",
    "dial_code": "+998",
    "code": "UZ",
    "flag": "🇺🇿"
  },
  {
    "name_en": "Pakistan",
    "name_fr": "Pakistan",
    "dial_code": "+92",
    "code": "PK",
    "flag": "🇵🇰"
  },
  {
    "name_en": "Palau",
    "name_fr": "Palaos (Palau)",
    "dial_code": "+680",
    "code": "PW",
    "flag": "🇵🇼"
  },
  {
    "name_en": "Palestine",
    "name_fr": "Palestine",
    "dial_code": "+970",
    "code": "PS",
    "flag": "🇵🇸"
  },
  {
    "name_en": "Panama",
    "name_fr": "Panama",
    "dial_code": "+507",
    "code": "PA",
    "flag": "🇵🇦"
  },
  {
    "name_en": "Papua New Guinea",
    "name_fr": "Papouasie-Nouvelle-Guinée",
    "dial_code": "+675",
    "code": "PG",
    "flag": "🇵🇬"
  },
  {
    "name_en": "Paraguay",
    "name_fr": "Paraguay",
    "dial_code": "+595",
    "code": "PY",
    "flag": "🇵🇾"
  },
  {
    "name_en": "Netherlands",
    "name_fr": "Pays-Bas",
    "dial_code": "+31",
    "code": "NL",
    "flag": "🇳🇱"
  },
  {
    "name_en": "Peru",
    "name_fr": "Pérou",
    "dial_code": "+51",
    "code": "PE",
    "flag": "🇵🇪"
  },
  {
    "name_en": "Philippines",
    "name_fr": "Philippines",
    "dial_code": "+63",
    "code": "PH",
    "flag": "🇵🇭"
  },
  {
    "name_en": "Pitcairn Islands",
    "name_fr": "Pitcairn",
    "dial_code": "+64",
    "code": "PN",
    "flag": "🇵🇳"
  },
  {
    "name_en": "Poland",
    "name_fr": "Pologne",
    "dial_code": "+48",
    "code": "PL",
    "flag": "🇵🇱"
  },
  {
    "name_en": "French Polynesia",
    "name_fr": "Polynésie française",
    "dial_code": "+689",
    "code": "PF",
    "flag": "🇵🇫"
  },
  {
    "name_en": "Puerto Rico",
    "name_fr": "Porto Rico",
    "dial_code": "+1",
    "code": "PR",
    "flag": "🇵🇷"
  },
  {
    "name_en": "Portugal",
    "name_fr": "Portugal",
    "dial_code": "+351",
    "code": "PT",
    "flag": "🇵🇹"
  },
  {
    "name_en": "Qatar",
    "name_fr": "Qatar",
    "dial_code": "+974",
    "code": "QA",
    "flag": "🇶🇦"
  },
  {
    "name_en": "Romania",
    "name_fr": "Roumanie",
    "dial_code": "+40",
    "code": "RO",
    "flag": "🇷🇴"
  },
  {
    "name_en": "United Kingdom",
    "name_fr": "Royaume-Uni",
    "dial_code": "+44",
    "code": "GB",
    "flag": "🇬🇧"
  },
  {
    "name_en": "Russia",
    "name_fr": "Russie",
    "dial_code": "+7",
    "code": "RU",
    "flag": "🇷🇺"
  },
  {
    "name_en": "Rwanda",
    "name_fr": "Rwanda",
    "dial_code": "+250",
    "code": "RW",
    "flag": "🇷🇼"
  },
  {
    "name_en": "Central African Republic",
    "name_fr": "République centrafricaine",
    "dial_code": "+236",
    "code": "CF",
    "flag": "🇨🇫"
  },
  {
    "name_en": "Dominican Republic",
    "name_fr": "République dominicaine",
    "dial_code": "+1809",
    "code": "DO",
    "flag": "🇩🇴"
  },
  {
    "name_en": "Czechia",
    "name_fr": "République tchèque",
    "dial_code": "+420",
    "code": "CZ",
    "flag": "🇨🇿"
  },
  {
    "name_en": "Réunion",
    "name_fr": "Réunion",
    "dial_code": "+262",
    "code": "RE",
    "flag": "🇷🇪"
  },
  {
    "name_en": "Western Sahara",
    "name_fr": "Sahara occidental",
    "dial_code": "+212",
    "code": "EH",
    "flag": "🇪🇭"
  },
  {
    "name_en": "Saint Kitts and Nevis",
    "name_fr": "Saint-Christophe-et-Niévès",
    "dial_code": "+1869",
    "code": "KN",
    "flag": "🇰🇳"
  },
  {
    "name_en": "San Marino",
    "name_fr": "Saint-Marin",
    "dial_code": "+378",
    "code": "SM",
    "flag": "🇸🇲"
  },
  {
    "name_en": "Saint Martin",
    "name_fr": "Saint-Martin",
    "dial_code": "+590",
    "code": "MF",
    "flag": "🇲🇫"
  },
  {
    "name_en": "Sint Maarten",
    "name_fr": "Saint-Martin",
    "dial_code": "+1721",
    "code": "SX",
    "flag": "🇸🇽"
  },
  {
    "name_en": "Saint Pierre and Miquelon",
    "name_fr": "Saint-Pierre-et-Miquelon",
    "dial_code": "+508",
    "code": "PM",
    "flag": "🇵🇲"
  },
  {
    "name_en": "Saint Vincent and the Grenadines",
    "name_fr": "Saint-Vincent-et-les-Grenadines",
    "dial_code": "+1784",
    "code": "VC",
    "flag": "🇻🇨"
  },
  {
    "name_en": "Saint Helena, Ascension and Tristan da Cunha",
    "name_fr": "Sainte-Hélène, Ascension et Tristan da Cunha",
    "dial_code": "+290",
    "code": "SH",
    "flag": "🇸🇭"
  },
  {
    "name_en": "Saint Lucia",
    "name_fr": "Sainte-Lucie",
    "dial_code": "+1758",
    "code": "LC",
    "flag": "🇱🇨"
  },
  {
    "name_en": "Samoa",
    "name_fr": "Samoa",
    "dial_code": "+685",
    "code": "WS",
    "flag": "🇼🇸"
  },
  {
    "name_en": "American Samoa",
    "name_fr": "Samoa américaines",
    "dial_code": "+1684",
    "code": "AS",
    "flag": "🇦🇸"
  },
  {
    "name_en": "Sao Tome and Principe",
    "name_fr": "Sao Tomé-et-Principe",
    "dial_code": "+239",
    "code": "ST",
    "flag": "🇸🇹"
  },
  {
    "name_en": "Serbia",
    "name_fr": "Serbie",
    "dial_code": "+381",
    "code": "RS",
    "flag": "🇷🇸"
  },
  {
    "name_en": "Seychelles",
    "name_fr": "Seychelles",
    "dial_code": "+248",
    "code": "SC",
    "flag": "🇸🇨"
  },
  {
    "name_en": "Sierra Leone",
    "name_fr": "Sierra Leone",
    "dial_code": "+232",
    "code": "SL",
    "flag": "🇸🇱"
  },
  {
    "name_en": "Singapore",
    "name_fr": "Singapour",
    "dial_code": "+65",
    "code": "SG",
    "flag": "🇸🇬"
  },
  {
    "name_en": "Slovakia",
    "name_fr": "Slovaquie",
    "dial_code": "+421",
    "code": "SK",
    "flag": "🇸🇰"
  },
  {
    "name_en": "Slovenia",
    "name_fr": "Slovénie",
    "dial_code": "+386",
    "code": "SI",
    "flag": "🇸🇮"
  },
  {
    "name_en": "Somalia",
    "name_fr": "Somalie",
    "dial_code": "+252",
    "code": "SO",
    "flag": "🇸🇴"
  },
  {
    "name_en": "Sudan",
    "name_fr": "Soudan",
    "dial_code": "+249",
    "code": "SD",
    "flag": "🇸🇩"
  },
  {
    "name_en": "South Sudan",
    "name_fr": "Soudan du Sud",
    "dial_code": "+211",
    "code": "SS",
    "flag": "🇸🇸"
  },
  {
    "name_en": "Sri Lanka",
    "name_fr": "Sri Lanka",
    "dial_code": "+94",
    "code": "LK",
    "flag": "🇱🇰"
  },
  {
    "name_en": "Suriname",
    "name_fr": "Suriname",
    "dial_code": "+597",
    "code": "SR",
    "flag": "🇸🇷"
  },
  {
    "name_en": "Sweden",
    "name_fr": "Suède",
    "dial_code": "+46",
    "code": "SE",
    "flag": "🇸🇪"
  },
  {
    "name_en": "Switzerland",
    "name_fr": "Suisse",
    "dial_code": "+41",
    "code": "CH",
    "flag": "🇨🇭"
  },
  {
    "name_en": "Svalbard and Jan Mayen",
    "name_fr": "Svalbard et Jan Mayen",
    "dial_code": "+47",
    "code": "SJ",
    "flag": "🇸🇯"
  },
  {
    "name_en": "Syria",
    "name_fr": "Syrie",
    "dial_code": "+963",
    "code": "SY",
    "flag": "🇸🇾"
  },
  {
    "name_en": "Senegal",
    "name_fr": "Sénégal",
    "dial_code": "+221",
    "code": "SN",
    "flag": "🇸🇳"
  },
  {
    "name_en": "Tajikistan",
    "name_fr": "Tadjikistan",
    "dial_code": "+992",
    "code": "TJ",
    "flag": "🇹🇯"
  },
  {
    "name_en": "Tanzania",
    "name_fr": "Tanzanie",
    "dial_code": "+255",
    "code": "TZ",
    "flag": "🇹🇿"
  },
  {
    "name_en": "Taiwan",
    "name_fr": "Taïwan",
    "dial_code": "+886",
    "code": "TW",
    "flag": "🇹🇼"
  },
  {
    "name_en": "Chad",
    "name_fr": "Tchad",
    "dial_code": "+235",
    "code": "TD",
    "flag": "🇹🇩"
  },
  {
    "name_en": "French Southern and Antarctic Lands",
    "name_fr": "Terres australes et antarctiques françaises",
    "dial_code": "+262",
    "code": "TF",
    "flag": "🇹🇫"
  },
  {
    "name_en": "British Indian Ocean Territory",
    "name_fr": "Territoire britannique de l'océan Indien",
    "dial_code": "+246",
    "code": "IO",
    "flag": "🇮🇴"
  },
  {
    "name_en": "Thailand",
    "name_fr": "Thaïlande",
    "dial_code": "+66",
    "code": "TH",
    "flag": "🇹🇭"
  },
  {
    "name_en": "Timor-Leste",
    "name_fr": "Timor oriental",
    "dial_code": "+670",
    "code": "TL",
    "flag": "🇹🇱"
  },
  {
    "name_en": "Togo",
    "name_fr": "Togo",
    "dial_code": "+228",
    "code": "TG",
    "flag": "🇹🇬"
  },
  {
    "name_en": "Tokelau",
    "name_fr": "Tokelau",
    "dial_code": "+690",
    "code": "TK",
    "flag": "🇹🇰"
  },
  {
    "name_en": "Tonga",
    "name_fr": "Tonga",
    "dial_code": "+676",
    "code": "TO",
    "flag": "🇹🇴"
  },
  {
    "name_en": "Trinidad and Tobago",
    "name_fr": "Trinité-et-Tobago",
    "dial_code": "+1868",
    "code": "TT",
    "flag": "🇹🇹"
  },
  {
    "name_en": "Tristan da Cunha",
    "name_fr": "Tristan da Cunha",
    "dial_code": "+290",
    "code": "SH",
    "flag": "🇸🇭"
  },
  {
    "name_en": "Tunisia",
    "name_fr": "Tunisie",
    "dial_code": "+216",
    "code": "TN",
    "flag": "🇹🇳"
  },
  {
    "name_en": "Turkmenistan",
    "name_fr": "Turkménistan",
    "dial_code": "+993",
    "code": "TM",
    "flag": "🇹🇲"
  },
  {
    "name_en": "Turkey",
    "name_fr": "Turquie",
    "dial_code": "+90",
    "code": "TR",
    "flag": "🇹🇷"
  },
  {
    "name_en": "Tuvalu",
    "name_fr": "Tuvalu",
    "dial_code": "+688",
    "code": "TV",
    "flag": "🇹🇻"
  },
  {
    "name_en": "Ukraine",
    "name_fr": "Ukraine",
    "dial_code": "+380",
    "code": "UA",
    "flag": "🇺🇦"
  },
  {
    "name_en": "Uruguay",
    "name_fr": "Uruguay",
    "dial_code": "+598",
    "code": "UY",
    "flag": "🇺🇾"
  },
  {
    "name_en": "Vanuatu",
    "name_fr": "Vanuatu",
    "dial_code": "+678",
    "code": "VU",
    "flag": "🇻🇺"
  },
  {
    "name_en": "Vatican City",
    "name_fr": "Vatican",
    "dial_code": "+39",
    "code": "VA",
    "flag": "🇻🇦"
  },
  {
    "name_en": "Venezuela",
    "name_fr": "Venezuela",
    "dial_code": "+58",
    "code": "VE",
    "flag": "🇻🇪"
  },
  {
    "name_en": "Vietnam",
    "name_fr": "Viêt Nam",
    "dial_code": "+84",
    "code": "VN",
    "flag": "🇻🇳"
  },
  {
    "name_en": "Wallis and Futuna",
    "name_fr": "Wallis-et-Futuna",
    "dial_code": "+681",
    "code": "WF",
    "flag": "🇼🇫"
  },
  {
    "name_en": "Yemen",
    "name_fr": "Yémen",
    "dial_code": "+967",
    "code": "YE",
    "flag": "🇾🇪"
  },
  {
    "name_en": "Zambia",
    "name_fr": "Zambie",
    "dial_code": "+260",
    "code": "ZM",
    "flag": "🇿🇲"
  },
  {
    "name_en": "Zimbabwe",
    "name_fr": "Zimbabwe",
    "dial_code": "+263",
    "code": "ZW",
    "flag": "🇿🇼"
  },
  {
    "name_en": "United Arab Emirates",
    "name_fr": "Émirats arabes unis",
    "dial_code": "+971",
    "code": "AE",
    "flag": "🇦🇪"
  },
  {
    "name_en": "Ecuador",
    "name_fr": "Équateur",
    "dial_code": "+593",
    "code": "EC",
    "flag": "🇪🇨"
  },
  {
    "name_en": "United States",
    "name_fr": "États-Unis",
    "dial_code": "+1",
    "code": "US",
    "flag": "🇺🇸"
  },
  {
    "name_en": "Falkland Islands",
    "name_fr": "Îles Malouines",
    "dial_code": "+500",
    "code": "FK",
    "flag": "🇫🇰"
  },
  {
    "name_en": "Faroe Islands",
    "name_fr": "Îles Féroé",
    "dial_code": "+298",
    "code": "FO",
    "flag": "🇫🇴"
  },
  {
    "name_en": "Cook Islands",
    "name_fr": "Îles Cook",
    "dial_code": "+682",
    "code": "CK",
    "flag": "🇨🇰"
  },
  {
    "name_en": "Solomon Islands",
    "name_fr": "Îles Salomon",
    "dial_code": "+677",
    "code": "SB",
    "flag": "🇸🇧"
  },
  {
    "name_en": "Turks and Caicos Islands",
    "name_fr": "Îles Turques-et-Caïques",
    "dial_code": "+1649",
    "code": "TC",
    "flag": "🇹🇨"
  },
  {
    "name_en": "British Virgin Islands",
    "name_fr": "Îles Vierges britanniques",
    "dial_code": "+1284",
    "code": "VG",
    "flag": "🇻🇬"
  },
  {
    "name_en": "U.S. Virgin Islands",
    "name_fr": "Îles Vierges des États-Unis",
    "dial_code": "+1340",
    "code": "VI",
    "flag": "🇻🇮"
  }
];