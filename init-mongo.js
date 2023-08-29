db = db.getSiblingDB('Parameters');
db.parameters.createIndex({ Name: 1 }, { unique: true });
db.parameters.insertMany([
  {
    "Name": "platforms", "Values": [
      { "Name": "eneba", "CommonName": "xbox", "ValueName": "xbox" },
      { "Name": "xbox", "CommonName": "xbox", "ValueName": "xboxseries" }
    ]
  },
  {
    "Name": "regions", "Values": [
      {
        "Name": "xbox",
        "ValueName": "fa-AF",
        "CommonName": "afghanistan"
      },
      {
        "Name": "xbox",
        "ValueName": "ps-AF",
        "CommonName": "afghanistan"
      },
      {
        "Name": "xbox",
        "ValueName": "uz-Arab-AF",
        "CommonName": "afghanistan"
      },
      {
        "Name": "xbox",
        "ValueName": "sv-AX",
        "CommonName": "åland islands"
      },
      {
        "Name": "xbox",
        "ValueName": "sq-AL",
        "CommonName": "albania"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-DZ",
        "CommonName": "algeria"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-DZ",
        "CommonName": "algeria"
      },
      {
        "Name": "xbox",
        "ValueName": "kab-DZ",
        "CommonName": "algeria"
      },
      {
        "Name": "xbox",
        "ValueName": "en-AS",
        "CommonName": "american samoa"
      },
      {
        "Name": "xbox",
        "ValueName": "ca-AD",
        "CommonName": "andorra"
      },
      {
        "Name": "xbox",
        "ValueName": "ln-AO",
        "CommonName": "angola"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-AO",
        "CommonName": "angola"
      },
      {
        "Name": "xbox",
        "ValueName": "en-AI",
        "CommonName": "anguilla"
      },
      {
        "Name": "xbox",
        "ValueName": "en-AG",
        "CommonName": "antigua and barbuda"
      },
      {
        "Name": "xbox",
        "ValueName": "es-AR",
        "CommonName": "argentina"
      },
      {
        "Name": "xbox",
        "ValueName": "hy-AM",
        "CommonName": "armenia"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-AW",
        "CommonName": "aruba"
      },
      {
        "Name": "xbox",
        "ValueName": "en-AU",
        "CommonName": "australia"
      },
      {
        "Name": "xbox",
        "ValueName": "de-AT",
        "CommonName": "austria"
      },
      {
        "Name": "xbox",
        "ValueName": "en-AT",
        "CommonName": "austria"
      },
      {
        "Name": "xbox",
        "ValueName": "az-Cyrl-AZ",
        "CommonName": "azerbaijan"
      },
      {
        "Name": "xbox",
        "ValueName": "az-Latn-AZ",
        "CommonName": "azerbaijan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BS",
        "CommonName": "bahamas"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-BH",
        "CommonName": "bahrain"
      },
      {
        "Name": "xbox",
        "ValueName": "bn-BD",
        "CommonName": "bangladesh"
      },
      {
        "Name": "xbox",
        "ValueName": "ccp-BD",
        "CommonName": "bangladesh"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BB",
        "CommonName": "barbados"
      },
      {
        "Name": "xbox",
        "ValueName": "be-BY",
        "CommonName": "belarus"
      },
      {
        "Name": "xbox",
        "ValueName": "ru-BY",
        "CommonName": "belarus"
      },
      {
        "Name": "xbox",
        "ValueName": "de-BE",
        "CommonName": "belgium"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BE",
        "CommonName": "belgium"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-BE",
        "CommonName": "belgium"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-BE",
        "CommonName": "belgium"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BZ",
        "CommonName": "belize"
      },
      {
        "Name": "xbox",
        "ValueName": "es-BZ",
        "CommonName": "belize"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-BJ",
        "CommonName": "benin"
      },
      {
        "Name": "xbox",
        "ValueName": "yo-BJ",
        "CommonName": "benin"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BM",
        "CommonName": "bermuda"
      },
      {
        "Name": "xbox",
        "ValueName": "dz-BT",
        "CommonName": "bhutan"
      },
      {
        "Name": "xbox",
        "ValueName": "es-BO",
        "CommonName": "bolivia (plurinational state of)"
      },
      {
        "Name": "xbox",
        "ValueName": "qu-BO",
        "CommonName": "bolivia (plurinational state of)"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-BQ",
        "CommonName": "bonaire, sint eustatius and saba"
      },
      {
        "Name": "xbox",
        "ValueName": "bs-Cyrl-BA",
        "CommonName": "bosnia and herzegovina"
      },
      {
        "Name": "xbox",
        "ValueName": "bs-Latn-BA",
        "CommonName": "bosnia and herzegovina"
      },
      {
        "Name": "xbox",
        "ValueName": "hr-BA",
        "CommonName": "bosnia and herzegovina"
      },
      {
        "Name": "xbox",
        "ValueName": "sr-Cyrl-BA",
        "CommonName": "bosnia and herzegovina"
      },
      {
        "Name": "xbox",
        "ValueName": "sr-Latn-BA",
        "CommonName": "bosnia and herzegovina"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BW",
        "CommonName": "botswana"
      },
      {
        "Name": "xbox",
        "ValueName": "es-BR",
        "CommonName": "brazil"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-BR",
        "CommonName": "brazil"
      },
      {
        "Name": "xbox",
        "ValueName": "en-IO",
        "CommonName": "british indian ocean territory"
      },
      {
        "Name": "xbox",
        "ValueName": "ms-BN",
        "CommonName": "brunei darussalam"
      },
      {
        "Name": "xbox",
        "ValueName": "bg-BG",
        "CommonName": "bulgaria"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-BF",
        "CommonName": "burkina faso"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-BF",
        "CommonName": "burkina faso"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-BF",
        "CommonName": "burkina faso"
      },
      {
        "Name": "xbox",
        "ValueName": "en-BI",
        "CommonName": "burundi"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-BI",
        "CommonName": "burundi"
      },
      {
        "Name": "xbox",
        "ValueName": "rn-BI",
        "CommonName": "burundi"
      },
      {
        "Name": "xbox",
        "ValueName": "kea-CV",
        "CommonName": "cabo verde"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-CV",
        "CommonName": "cabo verde"
      },
      {
        "Name": "xbox",
        "ValueName": "km-KH",
        "CommonName": "cambodia"
      },
      {
        "Name": "xbox",
        "ValueName": "agq-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "bas-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "dua-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "ewo-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "jgo-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "kkj-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "ksf-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "mgo-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "mua-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "nmg-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "nnh-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "yav-CM",
        "CommonName": "cameroon"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CA",
        "CommonName": "canada"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CA",
        "CommonName": "canada"
      },
      {
        "Name": "xbox",
        "ValueName": "en-KY",
        "CommonName": "cayman islands"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CF",
        "CommonName": "central african republic"
      },
      {
        "Name": "xbox",
        "ValueName": "ln-CF",
        "CommonName": "central african republic"
      },
      {
        "Name": "xbox",
        "ValueName": "sg-CF",
        "CommonName": "central african republic"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-TD",
        "CommonName": "chad"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-TD",
        "CommonName": "chad"
      },
      {
        "Name": "xbox",
        "ValueName": "es-CL",
        "CommonName": "chile"
      },
      {
        "Name": "xbox",
        "ValueName": "bo-CN",
        "CommonName": "china"
      },
      {
        "Name": "xbox",
        "ValueName": "ii-CN",
        "CommonName": "china"
      },
      {
        "Name": "xbox",
        "ValueName": "ug-CN",
        "CommonName": "china"
      },
      {
        "Name": "xbox",
        "ValueName": "yue-Hans-CN",
        "CommonName": "china"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hans-CN",
        "CommonName": "china"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CX",
        "CommonName": "christmas island"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CC",
        "CommonName": "cocos (keeling) islands"
      },
      {
        "Name": "xbox",
        "ValueName": "es-CO",
        "CommonName": "colombia"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-KM",
        "CommonName": "comoros"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-KM",
        "CommonName": "comoros"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CG",
        "CommonName": "congo"
      },
      {
        "Name": "xbox",
        "ValueName": "ln-CG",
        "CommonName": "congo"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CD",
        "CommonName": "congo, democratic republic of the"
      },
      {
        "Name": "xbox",
        "ValueName": "ln-CD",
        "CommonName": "congo, democratic republic of the"
      },
      {
        "Name": "xbox",
        "ValueName": "lu-CD",
        "CommonName": "congo, democratic republic of the"
      },
      {
        "Name": "xbox",
        "ValueName": "sw-CD",
        "CommonName": "congo, democratic republic of the"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CK",
        "CommonName": "cook islands"
      },
      {
        "Name": "xbox",
        "ValueName": "es-CR",
        "CommonName": "costa rica"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CI",
        "CommonName": "côte d'ivoire"
      },
      {
        "Name": "xbox",
        "ValueName": "hr-HR",
        "CommonName": "croatia"
      },
      {
        "Name": "xbox",
        "ValueName": "es-CU",
        "CommonName": "cuba"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-CW",
        "CommonName": "curaçao"
      },
      {
        "Name": "xbox",
        "ValueName": "el-CY",
        "CommonName": "cyprus"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CY",
        "CommonName": "cyprus"
      },
      {
        "Name": "xbox",
        "ValueName": "tr-CY",
        "CommonName": "cyprus"
      },
      {
        "Name": "xbox",
        "ValueName": "cs-CZ",
        "CommonName": "czechia"
      },
      {
        "Name": "xbox",
        "ValueName": "da-DK",
        "CommonName": "denmark"
      },
      {
        "Name": "xbox",
        "ValueName": "en-DK",
        "CommonName": "denmark"
      },
      {
        "Name": "xbox",
        "ValueName": "fo-DK",
        "CommonName": "denmark"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-DJ",
        "CommonName": "djibouti"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-DJ",
        "CommonName": "djibouti"
      },
      {
        "Name": "xbox",
        "ValueName": "so-DJ",
        "CommonName": "djibouti"
      },
      {
        "Name": "xbox",
        "ValueName": "en-DM",
        "CommonName": "dominica"
      },
      {
        "Name": "xbox",
        "ValueName": "es-DO",
        "CommonName": "dominican republic"
      },
      {
        "Name": "xbox",
        "ValueName": "es-EC",
        "CommonName": "ecuador"
      },
      {
        "Name": "xbox",
        "ValueName": "qu-EC",
        "CommonName": "ecuador"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-EG",
        "CommonName": "egypt"
      },
      {
        "Name": "xbox",
        "ValueName": "es-SV",
        "CommonName": "el salvador"
      },
      {
        "Name": "xbox",
        "ValueName": "es-GQ",
        "CommonName": "equatorial guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-GQ",
        "CommonName": "equatorial guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-GQ",
        "CommonName": "equatorial guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-ER",
        "CommonName": "eritrea"
      },
      {
        "Name": "xbox",
        "ValueName": "en-ER",
        "CommonName": "eritrea"
      },
      {
        "Name": "xbox",
        "ValueName": "ti-ER",
        "CommonName": "eritrea"
      },
      {
        "Name": "xbox",
        "ValueName": "et-EE",
        "CommonName": "estonia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SZ",
        "CommonName": "eswatini"
      },
      {
        "Name": "xbox",
        "ValueName": "am-ET",
        "CommonName": "ethiopia"
      },
      {
        "Name": "xbox",
        "ValueName": "om-ET",
        "CommonName": "ethiopia"
      },
      {
        "Name": "xbox",
        "ValueName": "so-ET",
        "CommonName": "ethiopia"
      },
      {
        "Name": "xbox",
        "ValueName": "ti-ET",
        "CommonName": "ethiopia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-FK",
        "CommonName": "falkland islands (malvinas)"
      },
      {
        "Name": "xbox",
        "ValueName": "fo-FO",
        "CommonName": "faroe islands"
      },
      {
        "Name": "xbox",
        "ValueName": "en-FJ",
        "CommonName": "fiji"
      },
      {
        "Name": "xbox",
        "ValueName": "en-FI",
        "CommonName": "finland"
      },
      {
        "Name": "xbox",
        "ValueName": "fi-FI",
        "CommonName": "finland"
      },
      {
        "Name": "xbox",
        "ValueName": "se-FI",
        "CommonName": "finland"
      },
      {
        "Name": "xbox",
        "ValueName": "smn-FI",
        "CommonName": "finland"
      },
      {
        "Name": "xbox",
        "ValueName": "sv-FI",
        "CommonName": "finland"
      },
      {
        "Name": "xbox",
        "ValueName": "br-FR",
        "CommonName": "france"
      },
      {
        "Name": "xbox",
        "ValueName": "ca-FR",
        "CommonName": "france"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-FR",
        "CommonName": "france"
      },
      {
        "Name": "xbox",
        "ValueName": "gsw-FR",
        "CommonName": "france"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-GF",
        "CommonName": "french guiana"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-PF",
        "CommonName": "french polynesia"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-GA",
        "CommonName": "gabon"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GM",
        "CommonName": "gambia"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-GM",
        "CommonName": "gambia"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-GM",
        "CommonName": "gambia"
      },
      {
        "Name": "xbox",
        "ValueName": "ka-GE",
        "CommonName": "georgia"
      },
      {
        "Name": "xbox",
        "ValueName": "os-GE",
        "CommonName": "georgia"
      },
      {
        "Name": "xbox",
        "ValueName": "de-DE",
        "CommonName": "germany"
      },
      {
        "Name": "xbox",
        "ValueName": "dsb-DE",
        "CommonName": "germany"
      },
      {
        "Name": "xbox",
        "ValueName": "en-DE",
        "CommonName": "germany"
      },
      {
        "Name": "xbox",
        "ValueName": "hsb-DE",
        "CommonName": "germany"
      },
      {
        "Name": "xbox",
        "ValueName": "ksh-DE",
        "CommonName": "germany"
      },
      {
        "Name": "xbox",
        "ValueName": "nds-DE",
        "CommonName": "germany"
      },
      {
        "Name": "xbox",
        "ValueName": "ak-GH",
        "CommonName": "ghana"
      },
      {
        "Name": "xbox",
        "ValueName": "ee-GH",
        "CommonName": "ghana"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GH",
        "CommonName": "ghana"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-GH",
        "CommonName": "ghana"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-GH",
        "CommonName": "ghana"
      },
      {
        "Name": "xbox",
        "ValueName": "ha-GH",
        "CommonName": "ghana"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GI",
        "CommonName": "gibraltar"
      },
      {
        "Name": "xbox",
        "ValueName": "el-GR",
        "CommonName": "greece"
      },
      {
        "Name": "xbox",
        "ValueName": "da-GL",
        "CommonName": "greenland"
      },
      {
        "Name": "xbox",
        "ValueName": "kl-GL",
        "CommonName": "greenland"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GD",
        "CommonName": "grenada"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-GP",
        "CommonName": "guadeloupe"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GU",
        "CommonName": "guam"
      },
      {
        "Name": "xbox",
        "ValueName": "es-GT",
        "CommonName": "guatemala"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GG",
        "CommonName": "guernsey"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-GN",
        "CommonName": "guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-GN",
        "CommonName": "guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-GN",
        "CommonName": "guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-GW",
        "CommonName": "guinea-bissau"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-GW",
        "CommonName": "guinea-bissau"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-GW",
        "CommonName": "guinea-bissau"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GY",
        "CommonName": "guyana"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-HT",
        "CommonName": "haiti"
      },
      {
        "Name": "xbox",
        "ValueName": "it-VA",
        "CommonName": "holy see"
      },
      {
        "Name": "xbox",
        "ValueName": "es-HN",
        "CommonName": "honduras"
      },
      {
        "Name": "xbox",
        "ValueName": "en-HK",
        "CommonName": "hong kong"
      },
      {
        "Name": "xbox",
        "ValueName": "yue-Hant-HK",
        "CommonName": "hong kong"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hans-HK",
        "CommonName": "hong kong"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hant-HK",
        "CommonName": "hong kong"
      },
      {
        "Name": "xbox",
        "ValueName": "hu-HU",
        "CommonName": "hungary"
      },
      {
        "Name": "xbox",
        "ValueName": "is-IS",
        "CommonName": "iceland"
      },
      {
        "Name": "xbox",
        "ValueName": "as-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "bn-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "bo-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "brx-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "ccp-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "en-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "gu-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "hi-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "kn-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "kok-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "ks-Arab-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "mai-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "ml-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "mni-Beng-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "mr-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "ne-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "or-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "pa-Guru-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "sat-Olck-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "sd-Deva-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "ta-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "te-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "ur-IN",
        "CommonName": "india"
      },
      {
        "Name": "xbox",
        "ValueName": "id-ID",
        "CommonName": "indonesia"
      },
      {
        "Name": "xbox",
        "ValueName": "jv-ID",
        "CommonName": "indonesia"
      },
      {
        "Name": "xbox",
        "ValueName": "ms-ID",
        "CommonName": "indonesia"
      },
      {
        "Name": "xbox",
        "ValueName": "su-Latn-ID",
        "CommonName": "indonesia"
      },
      {
        "Name": "xbox",
        "ValueName": "ckb-IR",
        "CommonName": "iran (islamic republic of)"
      },
      {
        "Name": "xbox",
        "ValueName": "fa-IR",
        "CommonName": "iran (islamic republic of)"
      },
      {
        "Name": "xbox",
        "ValueName": "lrc-IR",
        "CommonName": "iran (islamic republic of)"
      },
      {
        "Name": "xbox",
        "ValueName": "mzn-IR",
        "CommonName": "iran (islamic republic of)"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-IQ",
        "CommonName": "iraq"
      },
      {
        "Name": "xbox",
        "ValueName": "ckb-IQ",
        "CommonName": "iraq"
      },
      {
        "Name": "xbox",
        "ValueName": "lrc-IQ",
        "CommonName": "iraq"
      },
      {
        "Name": "xbox",
        "ValueName": "en-IE",
        "CommonName": "ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "ga-IE",
        "CommonName": "ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "en-IM",
        "CommonName": "isle of man"
      },
      {
        "Name": "xbox",
        "ValueName": "gv-IM",
        "CommonName": "isle of man"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-IL",
        "CommonName": "israel"
      },
      {
        "Name": "xbox",
        "ValueName": "en-IL",
        "CommonName": "israel"
      },
      {
        "Name": "xbox",
        "ValueName": "he-IL",
        "CommonName": "israel"
      },
      {
        "Name": "xbox",
        "ValueName": "ca-IT",
        "CommonName": "italy"
      },
      {
        "Name": "xbox",
        "ValueName": "de-IT",
        "CommonName": "italy"
      },
      {
        "Name": "xbox",
        "ValueName": "fur-IT",
        "CommonName": "italy"
      },
      {
        "Name": "xbox",
        "ValueName": "it-IT",
        "CommonName": "italy"
      },
      {
        "Name": "xbox",
        "ValueName": "en-JM",
        "CommonName": "jamaica"
      },
      {
        "Name": "xbox",
        "ValueName": "ja-JP",
        "CommonName": "japan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-JE",
        "CommonName": "jersey"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-JO",
        "CommonName": "jordan"
      },
      {
        "Name": "xbox",
        "ValueName": "kk-KZ",
        "CommonName": "kazakhstan"
      },
      {
        "Name": "xbox",
        "ValueName": "ru-KZ",
        "CommonName": "kazakhstan"
      },
      {
        "Name": "xbox",
        "ValueName": "dav-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "ebu-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "en-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "guz-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "kam-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "ki-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "kln-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "luo-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "luy-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "mas-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "mer-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "om-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "saq-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "so-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "sw-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "teo-KE",
        "CommonName": "kenya"
      },
      {
        "Name": "xbox",
        "ValueName": "en-KI",
        "CommonName": "kiribati"
      },
      {
        "Name": "xbox",
        "ValueName": "ko-KP",
        "CommonName": "korea (democratic people's republic of)"
      },
      {
        "Name": "xbox",
        "ValueName": "ko-KR",
        "CommonName": "korea, republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-KW",
        "CommonName": "kuwait"
      },
      {
        "Name": "xbox",
        "ValueName": "ky-KG",
        "CommonName": "kyrgyzstan"
      },
      {
        "Name": "xbox",
        "ValueName": "ru-KG",
        "CommonName": "kyrgyzstan"
      },
      {
        "Name": "xbox",
        "ValueName": "lo-LA",
        "CommonName": "lao people's democratic republic"
      },
      {
        "Name": "xbox",
        "ValueName": "lv-LV",
        "CommonName": "latvia"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-LB",
        "CommonName": "lebanon"
      },
      {
        "Name": "xbox",
        "ValueName": "en-LS",
        "CommonName": "lesotho"
      },
      {
        "Name": "xbox",
        "ValueName": "en-LR",
        "CommonName": "liberia"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-LR",
        "CommonName": "liberia"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-LR",
        "CommonName": "liberia"
      },
      {
        "Name": "xbox",
        "ValueName": "vai-Latn-LR",
        "CommonName": "liberia"
      },
      {
        "Name": "xbox",
        "ValueName": "vai-Vaii-LR",
        "CommonName": "liberia"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-LY",
        "CommonName": "libya"
      },
      {
        "Name": "xbox",
        "ValueName": "de-LI",
        "CommonName": "liechtenstein"
      },
      {
        "Name": "xbox",
        "ValueName": "gsw-LI",
        "CommonName": "liechtenstein"
      },
      {
        "Name": "xbox",
        "ValueName": "lt-LT",
        "CommonName": "lithuania"
      },
      {
        "Name": "xbox",
        "ValueName": "de-LU",
        "CommonName": "luxembourg"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-LU",
        "CommonName": "luxembourg"
      },
      {
        "Name": "xbox",
        "ValueName": "lb-LU",
        "CommonName": "luxembourg"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-LU",
        "CommonName": "luxembourg"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MO",
        "CommonName": "macao"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-MO",
        "CommonName": "macao"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hans-MO",
        "CommonName": "macao"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hant-MO",
        "CommonName": "macao"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MG",
        "CommonName": "madagascar"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MG",
        "CommonName": "madagascar"
      },
      {
        "Name": "xbox",
        "ValueName": "mg-MG",
        "CommonName": "madagascar"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MW",
        "CommonName": "malawi"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MY",
        "CommonName": "malaysia"
      },
      {
        "Name": "xbox",
        "ValueName": "ms-MY",
        "CommonName": "malaysia"
      },
      {
        "Name": "xbox",
        "ValueName": "ta-MY",
        "CommonName": "malaysia"
      },
      {
        "Name": "xbox",
        "ValueName": "bm-ML",
        "CommonName": "mali"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-ML",
        "CommonName": "mali"
      },
      {
        "Name": "xbox",
        "ValueName": "khq-ML",
        "CommonName": "mali"
      },
      {
        "Name": "xbox",
        "ValueName": "ses-ML",
        "CommonName": "mali"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MT",
        "CommonName": "malta"
      },
      {
        "Name": "xbox",
        "ValueName": "mt-MT",
        "CommonName": "malta"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MH",
        "CommonName": "marshall islands"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MQ",
        "CommonName": "martinique"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-MR",
        "CommonName": "mauritania"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-MR",
        "CommonName": "mauritania"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-MR",
        "CommonName": "mauritania"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MR",
        "CommonName": "mauritania"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MU",
        "CommonName": "mauritius"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MU",
        "CommonName": "mauritius"
      },
      {
        "Name": "xbox",
        "ValueName": "mfe-MU",
        "CommonName": "mauritius"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-YT",
        "CommonName": "mayotte"
      },
      {
        "Name": "xbox",
        "ValueName": "es-MX",
        "CommonName": "mexico"
      },
      {
        "Name": "xbox",
        "ValueName": "en-FM",
        "CommonName": "micronesia (federated states of)"
      },
      {
        "Name": "xbox",
        "ValueName": "ro-MD",
        "CommonName": "moldova, republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "ru-MD",
        "CommonName": "moldova, republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MC",
        "CommonName": "monaco"
      },
      {
        "Name": "xbox",
        "ValueName": "mn-MN",
        "CommonName": "mongolia"
      },
      {
        "Name": "xbox",
        "ValueName": "sr-Cyrl-ME",
        "CommonName": "montenegro"
      },
      {
        "Name": "xbox",
        "ValueName": "sr-Latn-ME",
        "CommonName": "montenegro"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MS",
        "CommonName": "montserrat"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-MA",
        "CommonName": "morocco"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MA",
        "CommonName": "morocco"
      },
      {
        "Name": "xbox",
        "ValueName": "shi-Latn-MA",
        "CommonName": "morocco"
      },
      {
        "Name": "xbox",
        "ValueName": "shi-Tfng-MA",
        "CommonName": "morocco"
      },
      {
        "Name": "xbox",
        "ValueName": "tzm-MA",
        "CommonName": "morocco"
      },
      {
        "Name": "xbox",
        "ValueName": "zgh-MA",
        "CommonName": "morocco"
      },
      {
        "Name": "xbox",
        "ValueName": "mgh-MZ",
        "CommonName": "mozambique"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-MZ",
        "CommonName": "mozambique"
      },
      {
        "Name": "xbox",
        "ValueName": "seh-MZ",
        "CommonName": "mozambique"
      },
      {
        "Name": "xbox",
        "ValueName": "my-MM",
        "CommonName": "myanmar"
      },
      {
        "Name": "xbox",
        "ValueName": "af-NA",
        "CommonName": "namibia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NA",
        "CommonName": "namibia"
      },
      {
        "Name": "xbox",
        "ValueName": "naq-NA",
        "CommonName": "namibia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NR",
        "CommonName": "nauru"
      },
      {
        "Name": "xbox",
        "ValueName": "ne-NP",
        "CommonName": "nepal"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NL",
        "CommonName": "netherlands"
      },
      {
        "Name": "xbox",
        "ValueName": "fy-NL",
        "CommonName": "netherlands"
      },
      {
        "Name": "xbox",
        "ValueName": "nds-NL",
        "CommonName": "netherlands"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-NL",
        "CommonName": "netherlands"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-NC",
        "CommonName": "new caledonia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NZ",
        "CommonName": "new zealand"
      },
      {
        "Name": "xbox",
        "ValueName": "mi-NZ",
        "CommonName": "new zealand"
      },
      {
        "Name": "xbox",
        "ValueName": "es-NI",
        "CommonName": "nicaragua"
      },
      {
        "Name": "xbox",
        "ValueName": "dje-NE",
        "CommonName": "niger"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-NE",
        "CommonName": "niger"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-NE",
        "CommonName": "niger"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-NE",
        "CommonName": "niger"
      },
      {
        "Name": "xbox",
        "ValueName": "ha-NE",
        "CommonName": "niger"
      },
      {
        "Name": "xbox",
        "ValueName": "twq-NE",
        "CommonName": "niger"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "ha-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "ig-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "pcm-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "yo-NG",
        "CommonName": "nigeria"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NU",
        "CommonName": "niue"
      },
      {
        "Name": "xbox",
        "ValueName": "en-NF",
        "CommonName": "norfolk island"
      },
      {
        "Name": "xbox",
        "ValueName": "mk-MK",
        "CommonName": "north macedonia"
      },
      {
        "Name": "xbox",
        "ValueName": "sq-MK",
        "CommonName": "north macedonia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-MP",
        "CommonName": "northern mariana islands"
      },
      {
        "Name": "xbox",
        "ValueName": "nb-NO",
        "CommonName": "norway"
      },
      {
        "Name": "xbox",
        "ValueName": "nn-NO",
        "CommonName": "norway"
      },
      {
        "Name": "xbox",
        "ValueName": "se-NO",
        "CommonName": "norway"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-OM",
        "CommonName": "oman"
      },
      {
        "Name": "xbox",
        "ValueName": "en-PK",
        "CommonName": "pakistan"
      },
      {
        "Name": "xbox",
        "ValueName": "pa-Arab-PK",
        "CommonName": "pakistan"
      },
      {
        "Name": "xbox",
        "ValueName": "ps-PK",
        "CommonName": "pakistan"
      },
      {
        "Name": "xbox",
        "ValueName": "sd-Arab-PK",
        "CommonName": "pakistan"
      },
      {
        "Name": "xbox",
        "ValueName": "ur-PK",
        "CommonName": "pakistan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-PW",
        "CommonName": "palau"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-PS",
        "CommonName": "palestine, state of"
      },
      {
        "Name": "xbox",
        "ValueName": "es-PA",
        "CommonName": "panama"
      },
      {
        "Name": "xbox",
        "ValueName": "en-PG",
        "CommonName": "papua new guinea"
      },
      {
        "Name": "xbox",
        "ValueName": "es-PY",
        "CommonName": "paraguay"
      },
      {
        "Name": "xbox",
        "ValueName": "es-PE",
        "CommonName": "peru"
      },
      {
        "Name": "xbox",
        "ValueName": "qu-PE",
        "CommonName": "peru"
      },
      {
        "Name": "xbox",
        "ValueName": "ceb-PH",
        "CommonName": "philippines"
      },
      {
        "Name": "xbox",
        "ValueName": "en-PH",
        "CommonName": "philippines"
      },
      {
        "Name": "xbox",
        "ValueName": "es-PH",
        "CommonName": "philippines"
      },
      {
        "Name": "xbox",
        "ValueName": "fil-PH",
        "CommonName": "philippines"
      },
      {
        "Name": "xbox",
        "ValueName": "en-PN",
        "CommonName": "pitcairn"
      },
      {
        "Name": "xbox",
        "ValueName": "pl-PL",
        "CommonName": "poland"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-PT",
        "CommonName": "portugal"
      },
      {
        "Name": "xbox",
        "ValueName": "en-PR",
        "CommonName": "puerto rico"
      },
      {
        "Name": "xbox",
        "ValueName": "es-PR",
        "CommonName": "puerto rico"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-QA",
        "CommonName": "qatar"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-RE",
        "CommonName": "réunion"
      },
      {
        "Name": "xbox",
        "ValueName": "ro-RO",
        "CommonName": "romania"
      },
      {
        "Name": "xbox",
        "ValueName": "ce-RU",
        "CommonName": "russian federation"
      },
      {
        "Name": "xbox",
        "ValueName": "cu-RU",
        "CommonName": "russian federation"
      },
      {
        "Name": "xbox",
        "ValueName": "os-RU",
        "CommonName": "russian federation"
      },
      {
        "Name": "xbox",
        "ValueName": "ru-RU",
        "CommonName": "russian federation"
      },
      {
        "Name": "xbox",
        "ValueName": "sah-RU",
        "CommonName": "russian federation"
      },
      {
        "Name": "xbox",
        "ValueName": "tt-RU",
        "CommonName": "russian federation"
      },
      {
        "Name": "xbox",
        "ValueName": "en-RW",
        "CommonName": "rwanda"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-RW",
        "CommonName": "rwanda"
      },
      {
        "Name": "xbox",
        "ValueName": "rw-RW",
        "CommonName": "rwanda"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-BL",
        "CommonName": "saint barthélemy"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SH",
        "CommonName": "saint helena, ascension and tristan da cunha"
      },
      {
        "Name": "xbox",
        "ValueName": "en-KN",
        "CommonName": "saint kitts and nevis"
      },
      {
        "Name": "xbox",
        "ValueName": "en-LC",
        "CommonName": "saint lucia"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-MF",
        "CommonName": "saint martin (french part)"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-PM",
        "CommonName": "saint pierre and miquelon"
      },
      {
        "Name": "xbox",
        "ValueName": "en-VC",
        "CommonName": "saint vincent and the grenadines"
      },
      {
        "Name": "xbox",
        "ValueName": "en-WS",
        "CommonName": "samoa"
      },
      {
        "Name": "xbox",
        "ValueName": "it-SM",
        "CommonName": "san marino"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-ST",
        "CommonName": "sao tome and principe"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-SA",
        "CommonName": "saudi arabia"
      },
      {
        "Name": "xbox",
        "ValueName": "dyo-SN",
        "CommonName": "senegal"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-SN",
        "CommonName": "senegal"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-SN",
        "CommonName": "senegal"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-SN",
        "CommonName": "senegal"
      },
      {
        "Name": "xbox",
        "ValueName": "wo-SN",
        "CommonName": "senegal"
      },
      {
        "Name": "xbox",
        "ValueName": "sr-Cyrl-RS",
        "CommonName": "serbia"
      },
      {
        "Name": "xbox",
        "ValueName": "sr-Latn-RS",
        "CommonName": "serbia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SC",
        "CommonName": "seychelles"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-SC",
        "CommonName": "seychelles"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SL",
        "CommonName": "sierra leone"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Adlm-SL",
        "CommonName": "sierra leone"
      },
      {
        "Name": "xbox",
        "ValueName": "ff-Latn-SL",
        "CommonName": "sierra leone"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SG",
        "CommonName": "singapore"
      },
      {
        "Name": "xbox",
        "ValueName": "ms-SG",
        "CommonName": "singapore"
      },
      {
        "Name": "xbox",
        "ValueName": "ta-SG",
        "CommonName": "singapore"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hans-SG",
        "CommonName": "singapore"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SX",
        "CommonName": "sint maarten (dutch part)"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-SX",
        "CommonName": "sint maarten (dutch part)"
      },
      {
        "Name": "xbox",
        "ValueName": "sk-SK",
        "CommonName": "slovakia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SI",
        "CommonName": "slovenia"
      },
      {
        "Name": "xbox",
        "ValueName": "sl-SI",
        "CommonName": "slovenia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SB",
        "CommonName": "solomon islands"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-SO",
        "CommonName": "somalia"
      },
      {
        "Name": "xbox",
        "ValueName": "so-SO",
        "CommonName": "somalia"
      },
      {
        "Name": "xbox",
        "ValueName": "af-ZA",
        "CommonName": "south africa"
      },
      {
        "Name": "xbox",
        "ValueName": "en-ZA",
        "CommonName": "south africa"
      },
      {
        "Name": "xbox",
        "ValueName": "xh-ZA",
        "CommonName": "south africa"
      },
      {
        "Name": "xbox",
        "ValueName": "zu-ZA",
        "CommonName": "south africa"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-SS",
        "CommonName": "south sudan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SS",
        "CommonName": "south sudan"
      },
      {
        "Name": "xbox",
        "ValueName": "nus-SS",
        "CommonName": "south sudan"
      },
      {
        "Name": "xbox",
        "ValueName": "ast-ES",
        "CommonName": "spain"
      },
      {
        "Name": "xbox",
        "ValueName": "ca-ES",
        "CommonName": "spain"
      },
      {
        "Name": "xbox",
        "ValueName": "ca-ES-VALENCIA",
        "CommonName": "spain"
      },
      {
        "Name": "xbox",
        "ValueName": "es-ES",
        "CommonName": "spain"
      },
      {
        "Name": "xbox",
        "ValueName": "eu-ES",
        "CommonName": "spain"
      },
      {
        "Name": "xbox",
        "ValueName": "gl-ES",
        "CommonName": "spain"
      },
      {
        "Name": "xbox",
        "ValueName": "si-LK",
        "CommonName": "sri lanka"
      },
      {
        "Name": "xbox",
        "ValueName": "ta-LK",
        "CommonName": "sri lanka"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-SD",
        "CommonName": "sudan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SD",
        "CommonName": "sudan"
      },
      {
        "Name": "xbox",
        "ValueName": "nl-SR",
        "CommonName": "suriname"
      },
      {
        "Name": "xbox",
        "ValueName": "nb-SJ",
        "CommonName": "svalbard and jan mayen"
      },
      {
        "Name": "xbox",
        "ValueName": "en-SE",
        "CommonName": "sweden"
      },
      {
        "Name": "xbox",
        "ValueName": "se-SE",
        "CommonName": "sweden"
      },
      {
        "Name": "xbox",
        "ValueName": "sv-SE",
        "CommonName": "sweden"
      },
      {
        "Name": "xbox",
        "ValueName": "de-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "en-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "gsw-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "it-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "rm-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "wae-CH",
        "CommonName": "switzerland"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-SY",
        "CommonName": "syrian arab republic"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-SY",
        "CommonName": "syrian arab republic"
      },
      {
        "Name": "xbox",
        "ValueName": "zh-Hant-TW",
        "CommonName": "taiwan, province of china"
      },
      {
        "Name": "xbox",
        "ValueName": "tg-TJ",
        "CommonName": "tajikistan"
      },
      {
        "Name": "xbox",
        "ValueName": "asa-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "bez-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "en-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "jmc-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "kde-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "ksb-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "lag-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "mas-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "rof-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "rwk-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "sbp-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "sw-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "vun-TZ",
        "CommonName": "tanzania, united republic of"
      },
      {
        "Name": "xbox",
        "ValueName": "th-TH",
        "CommonName": "thailand"
      },
      {
        "Name": "xbox",
        "ValueName": "pt-TL",
        "CommonName": "timor-leste"
      },
      {
        "Name": "xbox",
        "ValueName": "ee-TG",
        "CommonName": "togo"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-TG",
        "CommonName": "togo"
      },
      {
        "Name": "xbox",
        "ValueName": "en-TK",
        "CommonName": "tokelau"
      },
      {
        "Name": "xbox",
        "ValueName": "en-TO",
        "CommonName": "tonga"
      },
      {
        "Name": "xbox",
        "ValueName": "to-TO",
        "CommonName": "tonga"
      },
      {
        "Name": "xbox",
        "ValueName": "en-TT",
        "CommonName": "trinidad and tobago"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-TN",
        "CommonName": "tunisia"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-TN",
        "CommonName": "tunisia"
      },
      {
        "Name": "xbox",
        "ValueName": "ku-TR",
        "CommonName": "türkiye"
      },
      {
        "Name": "xbox",
        "ValueName": "tr-TR",
        "CommonName": "türkiye"
      },
      {
        "Name": "xbox",
        "ValueName": "tk-TM",
        "CommonName": "turkmenistan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-TC",
        "CommonName": "turks and caicos islands"
      },
      {
        "Name": "xbox",
        "ValueName": "en-TV",
        "CommonName": "tuvalu"
      },
      {
        "Name": "xbox",
        "ValueName": "cgg-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "en-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "lg-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "nyn-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "sw-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "teo-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "xog-UG",
        "CommonName": "uganda"
      },
      {
        "Name": "xbox",
        "ValueName": "ru-UA",
        "CommonName": "ukraine"
      },
      {
        "Name": "xbox",
        "ValueName": "uk-UA",
        "CommonName": "ukraine"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-AE",
        "CommonName": "united arab emirates"
      },
      {
        "Name": "xbox",
        "ValueName": "en-AE",
        "CommonName": "united arab emirates"
      },
      {
        "Name": "xbox",
        "ValueName": "cy-GB",
        "CommonName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "en-GB",
        "CommonName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "ga-GB",
        "CommonName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "gd-GB",
        "CommonName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "kw-GB",
        "CommonName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "xbox",
        "ValueName": "chr-US",
        "CommonName": "united states of america"
      },
      {
        "Name": "xbox",
        "ValueName": "en-US",
        "CommonName": "united states of america"
      },
      {
        "Name": "xbox",
        "ValueName": "en-US-POSIX",
        "CommonName": "united states of america"
      },
      {
        "Name": "xbox",
        "ValueName": "es-US",
        "CommonName": "united states of america"
      },
      {
        "Name": "xbox",
        "ValueName": "haw-US",
        "CommonName": "united states of america"
      },
      {
        "Name": "xbox",
        "ValueName": "lkt-US",
        "CommonName": "united states of america"
      },
      {
        "Name": "xbox",
        "ValueName": "en-UM",
        "CommonName": "united states minor outlying islands"
      },
      {
        "Name": "xbox",
        "ValueName": "es-UY",
        "CommonName": "uruguay"
      },
      {
        "Name": "xbox",
        "ValueName": "uz-Cyrl-UZ",
        "CommonName": "uzbekistan"
      },
      {
        "Name": "xbox",
        "ValueName": "uz-Latn-UZ",
        "CommonName": "uzbekistan"
      },
      {
        "Name": "xbox",
        "ValueName": "en-VU",
        "CommonName": "vanuatu"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-VU",
        "CommonName": "vanuatu"
      },
      {
        "Name": "xbox",
        "ValueName": "es-VE",
        "CommonName": "venezuela (bolivarian republic of)"
      },
      {
        "Name": "xbox",
        "ValueName": "vi-VN",
        "CommonName": "viet nam"
      },
      {
        "Name": "xbox",
        "ValueName": "en-VG",
        "CommonName": "virgin islands (british)"
      },
      {
        "Name": "xbox",
        "ValueName": "en-VI",
        "CommonName": "virgin islands (u.s.)"
      },
      {
        "Name": "xbox",
        "ValueName": "fr-WF",
        "CommonName": "wallis and futuna"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-EH",
        "CommonName": "western sahara"
      },
      {
        "Name": "xbox",
        "ValueName": "ar-YE",
        "CommonName": "yemen"
      },
      {
        "Name": "xbox",
        "ValueName": "bem-ZM",
        "CommonName": "zambia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-ZM",
        "CommonName": "zambia"
      },
      {
        "Name": "xbox",
        "ValueName": "en-ZW",
        "CommonName": "zimbabwe"
      },
      {
        "Name": "xbox",
        "ValueName": "nd-ZW",
        "CommonName": "zimbabwe"
      },
      {
        "Name": "xbox",
        "ValueName": "sn-ZW",
        "CommonName": "zimbabwe"
      },
      {
        "Name": "eneba",
        "CommonName": "afghanistan",
        "ValueName": "afghanistan"
      },
      {
        "Name": "eneba",
        "CommonName": "afghanistan",
        "ValueName": "afghanistan"
      },
      {
        "Name": "eneba",
        "CommonName": "afghanistan",
        "ValueName": "afghanistan"
      },
      {
        "Name": "eneba",
        "CommonName": "åland islands",
        "ValueName": "åland islands"
      },
      {
        "Name": "eneba",
        "CommonName": "albania",
        "ValueName": "albania"
      },
      {
        "Name": "eneba",
        "CommonName": "algeria",
        "ValueName": "algeria"
      },
      {
        "Name": "eneba",
        "CommonName": "algeria",
        "ValueName": "algeria"
      },
      {
        "Name": "eneba",
        "CommonName": "algeria",
        "ValueName": "algeria"
      },
      {
        "Name": "eneba",
        "CommonName": "american samoa",
        "ValueName": "american samoa"
      },
      {
        "Name": "eneba",
        "CommonName": "andorra",
        "ValueName": "andorra"
      },
      {
        "Name": "eneba",
        "CommonName": "angola",
        "ValueName": "angola"
      },
      {
        "Name": "eneba",
        "CommonName": "angola",
        "ValueName": "angola"
      },
      {
        "Name": "eneba",
        "CommonName": "anguilla",
        "ValueName": "anguilla"
      },
      {
        "Name": "eneba",
        "CommonName": "antigua and barbuda",
        "ValueName": "antigua and barbuda"
      },
      {
        "Name": "eneba",
        "CommonName": "argentina",
        "ValueName": "argentina"
      },
      {
        "Name": "eneba",
        "CommonName": "armenia",
        "ValueName": "armenia"
      },
      {
        "Name": "eneba",
        "CommonName": "aruba",
        "ValueName": "aruba"
      },
      {
        "Name": "eneba",
        "CommonName": "australia",
        "ValueName": "australia"
      },
      {
        "Name": "eneba",
        "CommonName": "austria",
        "ValueName": "austria"
      },
      {
        "Name": "eneba",
        "CommonName": "austria",
        "ValueName": "austria"
      },
      {
        "Name": "eneba",
        "CommonName": "azerbaijan",
        "ValueName": "azerbaijan"
      },
      {
        "Name": "eneba",
        "CommonName": "azerbaijan",
        "ValueName": "azerbaijan"
      },
      {
        "Name": "eneba",
        "CommonName": "bahamas",
        "ValueName": "bahamas"
      },
      {
        "Name": "eneba",
        "CommonName": "bahrain",
        "ValueName": "bahrain"
      },
      {
        "Name": "eneba",
        "CommonName": "bangladesh",
        "ValueName": "bangladesh"
      },
      {
        "Name": "eneba",
        "CommonName": "bangladesh",
        "ValueName": "bangladesh"
      },
      {
        "Name": "eneba",
        "CommonName": "barbados",
        "ValueName": "barbados"
      },
      {
        "Name": "eneba",
        "CommonName": "belarus",
        "ValueName": "belarus"
      },
      {
        "Name": "eneba",
        "CommonName": "belarus",
        "ValueName": "belarus"
      },
      {
        "Name": "eneba",
        "CommonName": "belgium",
        "ValueName": "belgium"
      },
      {
        "Name": "eneba",
        "CommonName": "belgium",
        "ValueName": "belgium"
      },
      {
        "Name": "eneba",
        "CommonName": "belgium",
        "ValueName": "belgium"
      },
      {
        "Name": "eneba",
        "CommonName": "belgium",
        "ValueName": "belgium"
      },
      {
        "Name": "eneba",
        "CommonName": "belize",
        "ValueName": "belize"
      },
      {
        "Name": "eneba",
        "CommonName": "belize",
        "ValueName": "belize"
      },
      {
        "Name": "eneba",
        "CommonName": "benin",
        "ValueName": "benin"
      },
      {
        "Name": "eneba",
        "CommonName": "benin",
        "ValueName": "benin"
      },
      {
        "Name": "eneba",
        "CommonName": "bermuda",
        "ValueName": "bermuda"
      },
      {
        "Name": "eneba",
        "CommonName": "bhutan",
        "ValueName": "bhutan"
      },
      {
        "Name": "eneba",
        "CommonName": "bolivia (plurinational state of)",
        "ValueName": "bolivia (plurinational state of)"
      },
      {
        "Name": "eneba",
        "CommonName": "bolivia (plurinational state of)",
        "ValueName": "bolivia (plurinational state of)"
      },
      {
        "Name": "eneba",
        "CommonName": "bonaire, sint eustatius and saba",
        "ValueName": "bonaire, sint eustatius and saba"
      },
      {
        "Name": "eneba",
        "CommonName": "bosnia and herzegovina",
        "ValueName": "bosnia and herzegovina"
      },
      {
        "Name": "eneba",
        "CommonName": "bosnia and herzegovina",
        "ValueName": "bosnia and herzegovina"
      },
      {
        "Name": "eneba",
        "CommonName": "bosnia and herzegovina",
        "ValueName": "bosnia and herzegovina"
      },
      {
        "Name": "eneba",
        "CommonName": "bosnia and herzegovina",
        "ValueName": "bosnia and herzegovina"
      },
      {
        "Name": "eneba",
        "CommonName": "bosnia and herzegovina",
        "ValueName": "bosnia and herzegovina"
      },
      {
        "Name": "eneba",
        "CommonName": "botswana",
        "ValueName": "botswana"
      },
      {
        "Name": "eneba",
        "CommonName": "brazil",
        "ValueName": "brazil"
      },
      {
        "Name": "eneba",
        "CommonName": "brazil",
        "ValueName": "brazil"
      },
      {
        "Name": "eneba",
        "CommonName": "british indian ocean territory",
        "ValueName": "british indian ocean territory"
      },
      {
        "Name": "eneba",
        "CommonName": "brunei darussalam",
        "ValueName": "brunei darussalam"
      },
      {
        "Name": "eneba",
        "CommonName": "bulgaria",
        "ValueName": "bulgaria"
      },
      {
        "Name": "eneba",
        "CommonName": "burkina faso",
        "ValueName": "burkina faso"
      },
      {
        "Name": "eneba",
        "CommonName": "burkina faso",
        "ValueName": "burkina faso"
      },
      {
        "Name": "eneba",
        "CommonName": "burkina faso",
        "ValueName": "burkina faso"
      },
      {
        "Name": "eneba",
        "CommonName": "burundi",
        "ValueName": "burundi"
      },
      {
        "Name": "eneba",
        "CommonName": "burundi",
        "ValueName": "burundi"
      },
      {
        "Name": "eneba",
        "CommonName": "burundi",
        "ValueName": "burundi"
      },
      {
        "Name": "eneba",
        "CommonName": "cabo verde",
        "ValueName": "cabo verde"
      },
      {
        "Name": "eneba",
        "CommonName": "cabo verde",
        "ValueName": "cabo verde"
      },
      {
        "Name": "eneba",
        "CommonName": "cambodia",
        "ValueName": "cambodia"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "cameroon",
        "ValueName": "cameroon"
      },
      {
        "Name": "eneba",
        "CommonName": "canada",
        "ValueName": "canada"
      },
      {
        "Name": "eneba",
        "CommonName": "canada",
        "ValueName": "canada"
      },
      {
        "Name": "eneba",
        "CommonName": "cayman islands",
        "ValueName": "cayman islands"
      },
      {
        "Name": "eneba",
        "CommonName": "central african republic",
        "ValueName": "central african republic"
      },
      {
        "Name": "eneba",
        "CommonName": "central african republic",
        "ValueName": "central african republic"
      },
      {
        "Name": "eneba",
        "CommonName": "central african republic",
        "ValueName": "central african republic"
      },
      {
        "Name": "eneba",
        "CommonName": "chad",
        "ValueName": "chad"
      },
      {
        "Name": "eneba",
        "CommonName": "chad",
        "ValueName": "chad"
      },
      {
        "Name": "eneba",
        "CommonName": "chile",
        "ValueName": "chile"
      },
      {
        "Name": "eneba",
        "CommonName": "china",
        "ValueName": "china"
      },
      {
        "Name": "eneba",
        "CommonName": "china",
        "ValueName": "china"
      },
      {
        "Name": "eneba",
        "CommonName": "china",
        "ValueName": "china"
      },
      {
        "Name": "eneba",
        "CommonName": "china",
        "ValueName": "china"
      },
      {
        "Name": "eneba",
        "CommonName": "china",
        "ValueName": "china"
      },
      {
        "Name": "eneba",
        "CommonName": "christmas island",
        "ValueName": "christmas island"
      },
      {
        "Name": "eneba",
        "CommonName": "cocos (keeling) islands",
        "ValueName": "cocos (keeling) islands"
      },
      {
        "Name": "eneba",
        "CommonName": "colombia",
        "ValueName": "colombia"
      },
      {
        "Name": "eneba",
        "CommonName": "comoros",
        "ValueName": "comoros"
      },
      {
        "Name": "eneba",
        "CommonName": "comoros",
        "ValueName": "comoros"
      },
      {
        "Name": "eneba",
        "CommonName": "congo",
        "ValueName": "congo"
      },
      {
        "Name": "eneba",
        "CommonName": "congo",
        "ValueName": "congo"
      },
      {
        "Name": "eneba",
        "CommonName": "congo, democratic republic of the",
        "ValueName": "congo, democratic republic of the"
      },
      {
        "Name": "eneba",
        "CommonName": "congo, democratic republic of the",
        "ValueName": "congo, democratic republic of the"
      },
      {
        "Name": "eneba",
        "CommonName": "congo, democratic republic of the",
        "ValueName": "congo, democratic republic of the"
      },
      {
        "Name": "eneba",
        "CommonName": "congo, democratic republic of the",
        "ValueName": "congo, democratic republic of the"
      },
      {
        "Name": "eneba",
        "CommonName": "cook islands",
        "ValueName": "cook islands"
      },
      {
        "Name": "eneba",
        "CommonName": "costa rica",
        "ValueName": "costa rica"
      },
      {
        "Name": "eneba",
        "CommonName": "côte d'ivoire",
        "ValueName": "côte d'ivoire"
      },
      {
        "Name": "eneba",
        "CommonName": "croatia",
        "ValueName": "croatia"
      },
      {
        "Name": "eneba",
        "CommonName": "cuba",
        "ValueName": "cuba"
      },
      {
        "Name": "eneba",
        "CommonName": "curaçao",
        "ValueName": "curaçao"
      },
      {
        "Name": "eneba",
        "CommonName": "cyprus",
        "ValueName": "cyprus"
      },
      {
        "Name": "eneba",
        "CommonName": "cyprus",
        "ValueName": "cyprus"
      },
      {
        "Name": "eneba",
        "CommonName": "cyprus",
        "ValueName": "cyprus"
      },
      {
        "Name": "eneba",
        "CommonName": "czechia",
        "ValueName": "czechia"
      },
      {
        "Name": "eneba",
        "CommonName": "denmark",
        "ValueName": "denmark"
      },
      {
        "Name": "eneba",
        "CommonName": "denmark",
        "ValueName": "denmark"
      },
      {
        "Name": "eneba",
        "CommonName": "denmark",
        "ValueName": "denmark"
      },
      {
        "Name": "eneba",
        "CommonName": "djibouti",
        "ValueName": "djibouti"
      },
      {
        "Name": "eneba",
        "CommonName": "djibouti",
        "ValueName": "djibouti"
      },
      {
        "Name": "eneba",
        "CommonName": "djibouti",
        "ValueName": "djibouti"
      },
      {
        "Name": "eneba",
        "CommonName": "dominica",
        "ValueName": "dominica"
      },
      {
        "Name": "eneba",
        "CommonName": "dominican republic",
        "ValueName": "dominican republic"
      },
      {
        "Name": "eneba",
        "CommonName": "ecuador",
        "ValueName": "ecuador"
      },
      {
        "Name": "eneba",
        "CommonName": "ecuador",
        "ValueName": "ecuador"
      },
      {
        "Name": "eneba",
        "CommonName": "egypt",
        "ValueName": "egypt"
      },
      {
        "Name": "eneba",
        "CommonName": "el salvador",
        "ValueName": "el salvador"
      },
      {
        "Name": "eneba",
        "CommonName": "equatorial guinea",
        "ValueName": "equatorial guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "equatorial guinea",
        "ValueName": "equatorial guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "equatorial guinea",
        "ValueName": "equatorial guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "eritrea",
        "ValueName": "eritrea"
      },
      {
        "Name": "eneba",
        "CommonName": "eritrea",
        "ValueName": "eritrea"
      },
      {
        "Name": "eneba",
        "CommonName": "eritrea",
        "ValueName": "eritrea"
      },
      {
        "Name": "eneba",
        "CommonName": "estonia",
        "ValueName": "estonia"
      },
      {
        "Name": "eneba",
        "CommonName": "eswatini",
        "ValueName": "eswatini"
      },
      {
        "Name": "eneba",
        "CommonName": "ethiopia",
        "ValueName": "ethiopia"
      },
      {
        "Name": "eneba",
        "CommonName": "ethiopia",
        "ValueName": "ethiopia"
      },
      {
        "Name": "eneba",
        "CommonName": "ethiopia",
        "ValueName": "ethiopia"
      },
      {
        "Name": "eneba",
        "CommonName": "ethiopia",
        "ValueName": "ethiopia"
      },
      {
        "Name": "eneba",
        "CommonName": "falkland islands (malvinas)",
        "ValueName": "falkland islands (malvinas)"
      },
      {
        "Name": "eneba",
        "CommonName": "faroe islands",
        "ValueName": "faroe islands"
      },
      {
        "Name": "eneba",
        "CommonName": "fiji",
        "ValueName": "fiji"
      },
      {
        "Name": "eneba",
        "CommonName": "finland",
        "ValueName": "finland"
      },
      {
        "Name": "eneba",
        "CommonName": "finland",
        "ValueName": "finland"
      },
      {
        "Name": "eneba",
        "CommonName": "finland",
        "ValueName": "finland"
      },
      {
        "Name": "eneba",
        "CommonName": "finland",
        "ValueName": "finland"
      },
      {
        "Name": "eneba",
        "CommonName": "finland",
        "ValueName": "finland"
      },
      {
        "Name": "eneba",
        "CommonName": "france",
        "ValueName": "france"
      },
      {
        "Name": "eneba",
        "CommonName": "france",
        "ValueName": "france"
      },
      {
        "Name": "eneba",
        "CommonName": "france",
        "ValueName": "france"
      },
      {
        "Name": "eneba",
        "CommonName": "france",
        "ValueName": "france"
      },
      {
        "Name": "eneba",
        "CommonName": "french guiana",
        "ValueName": "french guiana"
      },
      {
        "Name": "eneba",
        "CommonName": "french polynesia",
        "ValueName": "french polynesia"
      },
      {
        "Name": "eneba",
        "CommonName": "gabon",
        "ValueName": "gabon"
      },
      {
        "Name": "eneba",
        "CommonName": "gambia",
        "ValueName": "gambia"
      },
      {
        "Name": "eneba",
        "CommonName": "gambia",
        "ValueName": "gambia"
      },
      {
        "Name": "eneba",
        "CommonName": "gambia",
        "ValueName": "gambia"
      },
      {
        "Name": "eneba",
        "CommonName": "georgia",
        "ValueName": "georgia"
      },
      {
        "Name": "eneba",
        "CommonName": "georgia",
        "ValueName": "georgia"
      },
      {
        "Name": "eneba",
        "CommonName": "germany",
        "ValueName": "germany"
      },
      {
        "Name": "eneba",
        "CommonName": "germany",
        "ValueName": "germany"
      },
      {
        "Name": "eneba",
        "CommonName": "germany",
        "ValueName": "germany"
      },
      {
        "Name": "eneba",
        "CommonName": "germany",
        "ValueName": "germany"
      },
      {
        "Name": "eneba",
        "CommonName": "germany",
        "ValueName": "germany"
      },
      {
        "Name": "eneba",
        "CommonName": "germany",
        "ValueName": "germany"
      },
      {
        "Name": "eneba",
        "CommonName": "ghana",
        "ValueName": "ghana"
      },
      {
        "Name": "eneba",
        "CommonName": "ghana",
        "ValueName": "ghana"
      },
      {
        "Name": "eneba",
        "CommonName": "ghana",
        "ValueName": "ghana"
      },
      {
        "Name": "eneba",
        "CommonName": "ghana",
        "ValueName": "ghana"
      },
      {
        "Name": "eneba",
        "CommonName": "ghana",
        "ValueName": "ghana"
      },
      {
        "Name": "eneba",
        "CommonName": "ghana",
        "ValueName": "ghana"
      },
      {
        "Name": "eneba",
        "CommonName": "gibraltar",
        "ValueName": "gibraltar"
      },
      {
        "Name": "eneba",
        "CommonName": "greece",
        "ValueName": "greece"
      },
      {
        "Name": "eneba",
        "CommonName": "greenland",
        "ValueName": "greenland"
      },
      {
        "Name": "eneba",
        "CommonName": "greenland",
        "ValueName": "greenland"
      },
      {
        "Name": "eneba",
        "CommonName": "grenada",
        "ValueName": "grenada"
      },
      {
        "Name": "eneba",
        "CommonName": "guadeloupe",
        "ValueName": "guadeloupe"
      },
      {
        "Name": "eneba",
        "CommonName": "guam",
        "ValueName": "guam"
      },
      {
        "Name": "eneba",
        "CommonName": "guatemala",
        "ValueName": "guatemala"
      },
      {
        "Name": "eneba",
        "CommonName": "guernsey",
        "ValueName": "guernsey"
      },
      {
        "Name": "eneba",
        "CommonName": "guinea",
        "ValueName": "guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "guinea",
        "ValueName": "guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "guinea",
        "ValueName": "guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "guinea-bissau",
        "ValueName": "guinea-bissau"
      },
      {
        "Name": "eneba",
        "CommonName": "guinea-bissau",
        "ValueName": "guinea-bissau"
      },
      {
        "Name": "eneba",
        "CommonName": "guinea-bissau",
        "ValueName": "guinea-bissau"
      },
      {
        "Name": "eneba",
        "CommonName": "guyana",
        "ValueName": "guyana"
      },
      {
        "Name": "eneba",
        "CommonName": "haiti",
        "ValueName": "haiti"
      },
      {
        "Name": "eneba",
        "CommonName": "holy see",
        "ValueName": "holy see"
      },
      {
        "Name": "eneba",
        "CommonName": "honduras",
        "ValueName": "honduras"
      },
      {
        "Name": "eneba",
        "CommonName": "hong kong",
        "ValueName": "hong kong"
      },
      {
        "Name": "eneba",
        "CommonName": "hong kong",
        "ValueName": "hong kong"
      },
      {
        "Name": "eneba",
        "CommonName": "hong kong",
        "ValueName": "hong kong"
      },
      {
        "Name": "eneba",
        "CommonName": "hong kong",
        "ValueName": "hong kong"
      },
      {
        "Name": "eneba",
        "CommonName": "hungary",
        "ValueName": "hungary"
      },
      {
        "Name": "eneba",
        "CommonName": "iceland",
        "ValueName": "iceland"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "india",
        "ValueName": "india"
      },
      {
        "Name": "eneba",
        "CommonName": "indonesia",
        "ValueName": "indonesia"
      },
      {
        "Name": "eneba",
        "CommonName": "indonesia",
        "ValueName": "indonesia"
      },
      {
        "Name": "eneba",
        "CommonName": "indonesia",
        "ValueName": "indonesia"
      },
      {
        "Name": "eneba",
        "CommonName": "indonesia",
        "ValueName": "indonesia"
      },
      {
        "Name": "eneba",
        "CommonName": "iran (islamic republic of)",
        "ValueName": "iran (islamic republic of)"
      },
      {
        "Name": "eneba",
        "CommonName": "iran (islamic republic of)",
        "ValueName": "iran (islamic republic of)"
      },
      {
        "Name": "eneba",
        "CommonName": "iran (islamic republic of)",
        "ValueName": "iran (islamic republic of)"
      },
      {
        "Name": "eneba",
        "CommonName": "iran (islamic republic of)",
        "ValueName": "iran (islamic republic of)"
      },
      {
        "Name": "eneba",
        "CommonName": "iraq",
        "ValueName": "iraq"
      },
      {
        "Name": "eneba",
        "CommonName": "iraq",
        "ValueName": "iraq"
      },
      {
        "Name": "eneba",
        "CommonName": "iraq",
        "ValueName": "iraq"
      },
      {
        "Name": "eneba",
        "CommonName": "ireland",
        "ValueName": "ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "ireland",
        "ValueName": "ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "isle of man",
        "ValueName": "isle of man"
      },
      {
        "Name": "eneba",
        "CommonName": "isle of man",
        "ValueName": "isle of man"
      },
      {
        "Name": "eneba",
        "CommonName": "israel",
        "ValueName": "israel"
      },
      {
        "Name": "eneba",
        "CommonName": "israel",
        "ValueName": "israel"
      },
      {
        "Name": "eneba",
        "CommonName": "israel",
        "ValueName": "israel"
      },
      {
        "Name": "eneba",
        "CommonName": "italy",
        "ValueName": "italy"
      },
      {
        "Name": "eneba",
        "CommonName": "italy",
        "ValueName": "italy"
      },
      {
        "Name": "eneba",
        "CommonName": "italy",
        "ValueName": "italy"
      },
      {
        "Name": "eneba",
        "CommonName": "italy",
        "ValueName": "italy"
      },
      {
        "Name": "eneba",
        "CommonName": "jamaica",
        "ValueName": "jamaica"
      },
      {
        "Name": "eneba",
        "CommonName": "japan",
        "ValueName": "japan"
      },
      {
        "Name": "eneba",
        "CommonName": "jersey",
        "ValueName": "jersey"
      },
      {
        "Name": "eneba",
        "CommonName": "jordan",
        "ValueName": "jordan"
      },
      {
        "Name": "eneba",
        "CommonName": "kazakhstan",
        "ValueName": "kazakhstan"
      },
      {
        "Name": "eneba",
        "CommonName": "kazakhstan",
        "ValueName": "kazakhstan"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kenya",
        "ValueName": "kenya"
      },
      {
        "Name": "eneba",
        "CommonName": "kiribati",
        "ValueName": "kiribati"
      },
      {
        "Name": "eneba",
        "CommonName": "korea (democratic people's republic of)",
        "ValueName": "korea (democratic people's republic of)"
      },
      {
        "Name": "eneba",
        "CommonName": "korea, republic of",
        "ValueName": "korea, republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "kuwait",
        "ValueName": "kuwait"
      },
      {
        "Name": "eneba",
        "CommonName": "kyrgyzstan",
        "ValueName": "kyrgyzstan"
      },
      {
        "Name": "eneba",
        "CommonName": "kyrgyzstan",
        "ValueName": "kyrgyzstan"
      },
      {
        "Name": "eneba",
        "CommonName": "lao people's democratic republic",
        "ValueName": "lao people's democratic republic"
      },
      {
        "Name": "eneba",
        "CommonName": "latvia",
        "ValueName": "latvia"
      },
      {
        "Name": "eneba",
        "CommonName": "lebanon",
        "ValueName": "lebanon"
      },
      {
        "Name": "eneba",
        "CommonName": "lesotho",
        "ValueName": "lesotho"
      },
      {
        "Name": "eneba",
        "CommonName": "liberia",
        "ValueName": "liberia"
      },
      {
        "Name": "eneba",
        "CommonName": "liberia",
        "ValueName": "liberia"
      },
      {
        "Name": "eneba",
        "CommonName": "liberia",
        "ValueName": "liberia"
      },
      {
        "Name": "eneba",
        "CommonName": "liberia",
        "ValueName": "liberia"
      },
      {
        "Name": "eneba",
        "CommonName": "liberia",
        "ValueName": "liberia"
      },
      {
        "Name": "eneba",
        "CommonName": "libya",
        "ValueName": "libya"
      },
      {
        "Name": "eneba",
        "CommonName": "liechtenstein",
        "ValueName": "liechtenstein"
      },
      {
        "Name": "eneba",
        "CommonName": "liechtenstein",
        "ValueName": "liechtenstein"
      },
      {
        "Name": "eneba",
        "CommonName": "lithuania",
        "ValueName": "lithuania"
      },
      {
        "Name": "eneba",
        "CommonName": "luxembourg",
        "ValueName": "luxembourg"
      },
      {
        "Name": "eneba",
        "CommonName": "luxembourg",
        "ValueName": "luxembourg"
      },
      {
        "Name": "eneba",
        "CommonName": "luxembourg",
        "ValueName": "luxembourg"
      },
      {
        "Name": "eneba",
        "CommonName": "luxembourg",
        "ValueName": "luxembourg"
      },
      {
        "Name": "eneba",
        "CommonName": "macao",
        "ValueName": "macao"
      },
      {
        "Name": "eneba",
        "CommonName": "macao",
        "ValueName": "macao"
      },
      {
        "Name": "eneba",
        "CommonName": "macao",
        "ValueName": "macao"
      },
      {
        "Name": "eneba",
        "CommonName": "macao",
        "ValueName": "macao"
      },
      {
        "Name": "eneba",
        "CommonName": "madagascar",
        "ValueName": "madagascar"
      },
      {
        "Name": "eneba",
        "CommonName": "madagascar",
        "ValueName": "madagascar"
      },
      {
        "Name": "eneba",
        "CommonName": "madagascar",
        "ValueName": "madagascar"
      },
      {
        "Name": "eneba",
        "CommonName": "malawi",
        "ValueName": "malawi"
      },
      {
        "Name": "eneba",
        "CommonName": "malaysia",
        "ValueName": "malaysia"
      },
      {
        "Name": "eneba",
        "CommonName": "malaysia",
        "ValueName": "malaysia"
      },
      {
        "Name": "eneba",
        "CommonName": "malaysia",
        "ValueName": "malaysia"
      },
      {
        "Name": "eneba",
        "CommonName": "mali",
        "ValueName": "mali"
      },
      {
        "Name": "eneba",
        "CommonName": "mali",
        "ValueName": "mali"
      },
      {
        "Name": "eneba",
        "CommonName": "mali",
        "ValueName": "mali"
      },
      {
        "Name": "eneba",
        "CommonName": "mali",
        "ValueName": "mali"
      },
      {
        "Name": "eneba",
        "CommonName": "malta",
        "ValueName": "malta"
      },
      {
        "Name": "eneba",
        "CommonName": "malta",
        "ValueName": "malta"
      },
      {
        "Name": "eneba",
        "CommonName": "marshall islands",
        "ValueName": "marshall islands"
      },
      {
        "Name": "eneba",
        "CommonName": "martinique",
        "ValueName": "martinique"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritania",
        "ValueName": "mauritania"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritania",
        "ValueName": "mauritania"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritania",
        "ValueName": "mauritania"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritania",
        "ValueName": "mauritania"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritius",
        "ValueName": "mauritius"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritius",
        "ValueName": "mauritius"
      },
      {
        "Name": "eneba",
        "CommonName": "mauritius",
        "ValueName": "mauritius"
      },
      {
        "Name": "eneba",
        "CommonName": "mayotte",
        "ValueName": "mayotte"
      },
      {
        "Name": "eneba",
        "CommonName": "mexico",
        "ValueName": "mexico"
      },
      {
        "Name": "eneba",
        "CommonName": "micronesia (federated states of)",
        "ValueName": "micronesia (federated states of)"
      },
      {
        "Name": "eneba",
        "CommonName": "moldova, republic of",
        "ValueName": "moldova, republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "moldova, republic of",
        "ValueName": "moldova, republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "monaco",
        "ValueName": "monaco"
      },
      {
        "Name": "eneba",
        "CommonName": "mongolia",
        "ValueName": "mongolia"
      },
      {
        "Name": "eneba",
        "CommonName": "montenegro",
        "ValueName": "montenegro"
      },
      {
        "Name": "eneba",
        "CommonName": "montenegro",
        "ValueName": "montenegro"
      },
      {
        "Name": "eneba",
        "CommonName": "montserrat",
        "ValueName": "montserrat"
      },
      {
        "Name": "eneba",
        "CommonName": "morocco",
        "ValueName": "morocco"
      },
      {
        "Name": "eneba",
        "CommonName": "morocco",
        "ValueName": "morocco"
      },
      {
        "Name": "eneba",
        "CommonName": "morocco",
        "ValueName": "morocco"
      },
      {
        "Name": "eneba",
        "CommonName": "morocco",
        "ValueName": "morocco"
      },
      {
        "Name": "eneba",
        "CommonName": "morocco",
        "ValueName": "morocco"
      },
      {
        "Name": "eneba",
        "CommonName": "morocco",
        "ValueName": "morocco"
      },
      {
        "Name": "eneba",
        "CommonName": "mozambique",
        "ValueName": "mozambique"
      },
      {
        "Name": "eneba",
        "CommonName": "mozambique",
        "ValueName": "mozambique"
      },
      {
        "Name": "eneba",
        "CommonName": "mozambique",
        "ValueName": "mozambique"
      },
      {
        "Name": "eneba",
        "CommonName": "myanmar",
        "ValueName": "myanmar"
      },
      {
        "Name": "eneba",
        "CommonName": "namibia",
        "ValueName": "namibia"
      },
      {
        "Name": "eneba",
        "CommonName": "namibia",
        "ValueName": "namibia"
      },
      {
        "Name": "eneba",
        "CommonName": "namibia",
        "ValueName": "namibia"
      },
      {
        "Name": "eneba",
        "CommonName": "nauru",
        "ValueName": "nauru"
      },
      {
        "Name": "eneba",
        "CommonName": "nepal",
        "ValueName": "nepal"
      },
      {
        "Name": "eneba",
        "CommonName": "netherlands",
        "ValueName": "netherlands"
      },
      {
        "Name": "eneba",
        "CommonName": "netherlands",
        "ValueName": "netherlands"
      },
      {
        "Name": "eneba",
        "CommonName": "netherlands",
        "ValueName": "netherlands"
      },
      {
        "Name": "eneba",
        "CommonName": "netherlands",
        "ValueName": "netherlands"
      },
      {
        "Name": "eneba",
        "CommonName": "new caledonia",
        "ValueName": "new caledonia"
      },
      {
        "Name": "eneba",
        "CommonName": "new zealand",
        "ValueName": "new zealand"
      },
      {
        "Name": "eneba",
        "CommonName": "new zealand",
        "ValueName": "new zealand"
      },
      {
        "Name": "eneba",
        "CommonName": "nicaragua",
        "ValueName": "nicaragua"
      },
      {
        "Name": "eneba",
        "CommonName": "niger",
        "ValueName": "niger"
      },
      {
        "Name": "eneba",
        "CommonName": "niger",
        "ValueName": "niger"
      },
      {
        "Name": "eneba",
        "CommonName": "niger",
        "ValueName": "niger"
      },
      {
        "Name": "eneba",
        "CommonName": "niger",
        "ValueName": "niger"
      },
      {
        "Name": "eneba",
        "CommonName": "niger",
        "ValueName": "niger"
      },
      {
        "Name": "eneba",
        "CommonName": "niger",
        "ValueName": "niger"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "nigeria",
        "ValueName": "nigeria"
      },
      {
        "Name": "eneba",
        "CommonName": "niue",
        "ValueName": "niue"
      },
      {
        "Name": "eneba",
        "CommonName": "norfolk island",
        "ValueName": "norfolk island"
      },
      {
        "Name": "eneba",
        "CommonName": "north macedonia",
        "ValueName": "north macedonia"
      },
      {
        "Name": "eneba",
        "CommonName": "north macedonia",
        "ValueName": "north macedonia"
      },
      {
        "Name": "eneba",
        "CommonName": "northern mariana islands",
        "ValueName": "northern mariana islands"
      },
      {
        "Name": "eneba",
        "CommonName": "norway",
        "ValueName": "norway"
      },
      {
        "Name": "eneba",
        "CommonName": "norway",
        "ValueName": "norway"
      },
      {
        "Name": "eneba",
        "CommonName": "norway",
        "ValueName": "norway"
      },
      {
        "Name": "eneba",
        "CommonName": "oman",
        "ValueName": "oman"
      },
      {
        "Name": "eneba",
        "CommonName": "pakistan",
        "ValueName": "pakistan"
      },
      {
        "Name": "eneba",
        "CommonName": "pakistan",
        "ValueName": "pakistan"
      },
      {
        "Name": "eneba",
        "CommonName": "pakistan",
        "ValueName": "pakistan"
      },
      {
        "Name": "eneba",
        "CommonName": "pakistan",
        "ValueName": "pakistan"
      },
      {
        "Name": "eneba",
        "CommonName": "pakistan",
        "ValueName": "pakistan"
      },
      {
        "Name": "eneba",
        "CommonName": "palau",
        "ValueName": "palau"
      },
      {
        "Name": "eneba",
        "CommonName": "palestine, state of",
        "ValueName": "palestine, state of"
      },
      {
        "Name": "eneba",
        "CommonName": "panama",
        "ValueName": "panama"
      },
      {
        "Name": "eneba",
        "CommonName": "papua new guinea",
        "ValueName": "papua new guinea"
      },
      {
        "Name": "eneba",
        "CommonName": "paraguay",
        "ValueName": "paraguay"
      },
      {
        "Name": "eneba",
        "CommonName": "peru",
        "ValueName": "peru"
      },
      {
        "Name": "eneba",
        "CommonName": "peru",
        "ValueName": "peru"
      },
      {
        "Name": "eneba",
        "CommonName": "philippines",
        "ValueName": "philippines"
      },
      {
        "Name": "eneba",
        "CommonName": "philippines",
        "ValueName": "philippines"
      },
      {
        "Name": "eneba",
        "CommonName": "philippines",
        "ValueName": "philippines"
      },
      {
        "Name": "eneba",
        "CommonName": "philippines",
        "ValueName": "philippines"
      },
      {
        "Name": "eneba",
        "CommonName": "pitcairn",
        "ValueName": "pitcairn"
      },
      {
        "Name": "eneba",
        "CommonName": "poland",
        "ValueName": "poland"
      },
      {
        "Name": "eneba",
        "CommonName": "portugal",
        "ValueName": "portugal"
      },
      {
        "Name": "eneba",
        "CommonName": "puerto rico",
        "ValueName": "puerto rico"
      },
      {
        "Name": "eneba",
        "CommonName": "puerto rico",
        "ValueName": "puerto rico"
      },
      {
        "Name": "eneba",
        "CommonName": "qatar",
        "ValueName": "qatar"
      },
      {
        "Name": "eneba",
        "CommonName": "réunion",
        "ValueName": "réunion"
      },
      {
        "Name": "eneba",
        "CommonName": "romania",
        "ValueName": "romania"
      },
      {
        "Name": "eneba",
        "CommonName": "russian federation",
        "ValueName": "russian federation"
      },
      {
        "Name": "eneba",
        "CommonName": "russian federation",
        "ValueName": "russian federation"
      },
      {
        "Name": "eneba",
        "CommonName": "russian federation",
        "ValueName": "russian federation"
      },
      {
        "Name": "eneba",
        "CommonName": "russian federation",
        "ValueName": "russian federation"
      },
      {
        "Name": "eneba",
        "CommonName": "russian federation",
        "ValueName": "russian federation"
      },
      {
        "Name": "eneba",
        "CommonName": "russian federation",
        "ValueName": "russian federation"
      },
      {
        "Name": "eneba",
        "CommonName": "rwanda",
        "ValueName": "rwanda"
      },
      {
        "Name": "eneba",
        "CommonName": "rwanda",
        "ValueName": "rwanda"
      },
      {
        "Name": "eneba",
        "CommonName": "rwanda",
        "ValueName": "rwanda"
      },
      {
        "Name": "eneba",
        "CommonName": "saint barthélemy",
        "ValueName": "saint barthélemy"
      },
      {
        "Name": "eneba",
        "CommonName": "saint helena, ascension and tristan da cunha",
        "ValueName": "saint helena, ascension and tristan da cunha"
      },
      {
        "Name": "eneba",
        "CommonName": "saint kitts and nevis",
        "ValueName": "saint kitts and nevis"
      },
      {
        "Name": "eneba",
        "CommonName": "saint lucia",
        "ValueName": "saint lucia"
      },
      {
        "Name": "eneba",
        "CommonName": "saint martin (french part)",
        "ValueName": "saint martin (french part)"
      },
      {
        "Name": "eneba",
        "CommonName": "saint pierre and miquelon",
        "ValueName": "saint pierre and miquelon"
      },
      {
        "Name": "eneba",
        "CommonName": "saint vincent and the grenadines",
        "ValueName": "saint vincent and the grenadines"
      },
      {
        "Name": "eneba",
        "CommonName": "samoa",
        "ValueName": "samoa"
      },
      {
        "Name": "eneba",
        "CommonName": "san marino",
        "ValueName": "san marino"
      },
      {
        "Name": "eneba",
        "CommonName": "sao tome and principe",
        "ValueName": "sao tome and principe"
      },
      {
        "Name": "eneba",
        "CommonName": "saudi arabia",
        "ValueName": "saudi arabia"
      },
      {
        "Name": "eneba",
        "CommonName": "senegal",
        "ValueName": "senegal"
      },
      {
        "Name": "eneba",
        "CommonName": "senegal",
        "ValueName": "senegal"
      },
      {
        "Name": "eneba",
        "CommonName": "senegal",
        "ValueName": "senegal"
      },
      {
        "Name": "eneba",
        "CommonName": "senegal",
        "ValueName": "senegal"
      },
      {
        "Name": "eneba",
        "CommonName": "senegal",
        "ValueName": "senegal"
      },
      {
        "Name": "eneba",
        "CommonName": "serbia",
        "ValueName": "serbia"
      },
      {
        "Name": "eneba",
        "CommonName": "serbia",
        "ValueName": "serbia"
      },
      {
        "Name": "eneba",
        "CommonName": "seychelles",
        "ValueName": "seychelles"
      },
      {
        "Name": "eneba",
        "CommonName": "seychelles",
        "ValueName": "seychelles"
      },
      {
        "Name": "eneba",
        "CommonName": "sierra leone",
        "ValueName": "sierra leone"
      },
      {
        "Name": "eneba",
        "CommonName": "sierra leone",
        "ValueName": "sierra leone"
      },
      {
        "Name": "eneba",
        "CommonName": "sierra leone",
        "ValueName": "sierra leone"
      },
      {
        "Name": "eneba",
        "CommonName": "singapore",
        "ValueName": "singapore"
      },
      {
        "Name": "eneba",
        "CommonName": "singapore",
        "ValueName": "singapore"
      },
      {
        "Name": "eneba",
        "CommonName": "singapore",
        "ValueName": "singapore"
      },
      {
        "Name": "eneba",
        "CommonName": "singapore",
        "ValueName": "singapore"
      },
      {
        "Name": "eneba",
        "CommonName": "sint maarten (dutch part)",
        "ValueName": "sint maarten (dutch part)"
      },
      {
        "Name": "eneba",
        "CommonName": "sint maarten (dutch part)",
        "ValueName": "sint maarten (dutch part)"
      },
      {
        "Name": "eneba",
        "CommonName": "slovakia",
        "ValueName": "slovakia"
      },
      {
        "Name": "eneba",
        "CommonName": "slovenia",
        "ValueName": "slovenia"
      },
      {
        "Name": "eneba",
        "CommonName": "slovenia",
        "ValueName": "slovenia"
      },
      {
        "Name": "eneba",
        "CommonName": "solomon islands",
        "ValueName": "solomon islands"
      },
      {
        "Name": "eneba",
        "CommonName": "somalia",
        "ValueName": "somalia"
      },
      {
        "Name": "eneba",
        "CommonName": "somalia",
        "ValueName": "somalia"
      },
      {
        "Name": "eneba",
        "CommonName": "south africa",
        "ValueName": "south africa"
      },
      {
        "Name": "eneba",
        "CommonName": "south africa",
        "ValueName": "south africa"
      },
      {
        "Name": "eneba",
        "CommonName": "south africa",
        "ValueName": "south africa"
      },
      {
        "Name": "eneba",
        "CommonName": "south africa",
        "ValueName": "south africa"
      },
      {
        "Name": "eneba",
        "CommonName": "south sudan",
        "ValueName": "south sudan"
      },
      {
        "Name": "eneba",
        "CommonName": "south sudan",
        "ValueName": "south sudan"
      },
      {
        "Name": "eneba",
        "CommonName": "south sudan",
        "ValueName": "south sudan"
      },
      {
        "Name": "eneba",
        "CommonName": "spain",
        "ValueName": "spain"
      },
      {
        "Name": "eneba",
        "CommonName": "spain",
        "ValueName": "spain"
      },
      {
        "Name": "eneba",
        "CommonName": "spain",
        "ValueName": "spain"
      },
      {
        "Name": "eneba",
        "CommonName": "spain",
        "ValueName": "spain"
      },
      {
        "Name": "eneba",
        "CommonName": "spain",
        "ValueName": "spain"
      },
      {
        "Name": "eneba",
        "CommonName": "spain",
        "ValueName": "spain"
      },
      {
        "Name": "eneba",
        "CommonName": "sri lanka",
        "ValueName": "sri lanka"
      },
      {
        "Name": "eneba",
        "CommonName": "sri lanka",
        "ValueName": "sri lanka"
      },
      {
        "Name": "eneba",
        "CommonName": "sudan",
        "ValueName": "sudan"
      },
      {
        "Name": "eneba",
        "CommonName": "sudan",
        "ValueName": "sudan"
      },
      {
        "Name": "eneba",
        "CommonName": "suriname",
        "ValueName": "suriname"
      },
      {
        "Name": "eneba",
        "CommonName": "svalbard and jan mayen",
        "ValueName": "svalbard and jan mayen"
      },
      {
        "Name": "eneba",
        "CommonName": "sweden",
        "ValueName": "sweden"
      },
      {
        "Name": "eneba",
        "CommonName": "sweden",
        "ValueName": "sweden"
      },
      {
        "Name": "eneba",
        "CommonName": "sweden",
        "ValueName": "sweden"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "switzerland",
        "ValueName": "switzerland"
      },
      {
        "Name": "eneba",
        "CommonName": "syrian arab republic",
        "ValueName": "syrian arab republic"
      },
      {
        "Name": "eneba",
        "CommonName": "syrian arab republic",
        "ValueName": "syrian arab republic"
      },
      {
        "Name": "eneba",
        "CommonName": "taiwan, province of china",
        "ValueName": "taiwan, province of china"
      },
      {
        "Name": "eneba",
        "CommonName": "tajikistan",
        "ValueName": "tajikistan"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "tanzania, united republic of",
        "ValueName": "tanzania, united republic of"
      },
      {
        "Name": "eneba",
        "CommonName": "thailand",
        "ValueName": "thailand"
      },
      {
        "Name": "eneba",
        "CommonName": "timor-leste",
        "ValueName": "timor-leste"
      },
      {
        "Name": "eneba",
        "CommonName": "togo",
        "ValueName": "togo"
      },
      {
        "Name": "eneba",
        "CommonName": "togo",
        "ValueName": "togo"
      },
      {
        "Name": "eneba",
        "CommonName": "tokelau",
        "ValueName": "tokelau"
      },
      {
        "Name": "eneba",
        "CommonName": "tonga",
        "ValueName": "tonga"
      },
      {
        "Name": "eneba",
        "CommonName": "tonga",
        "ValueName": "tonga"
      },
      {
        "Name": "eneba",
        "CommonName": "trinidad and tobago",
        "ValueName": "trinidad and tobago"
      },
      {
        "Name": "eneba",
        "CommonName": "tunisia",
        "ValueName": "tunisia"
      },
      {
        "Name": "eneba",
        "CommonName": "tunisia",
        "ValueName": "tunisia"
      },
      {
        "Name": "eneba",
        "CommonName": "türkiye",
        "ValueName": "türkiye"
      },
      {
        "Name": "eneba",
        "CommonName": "türkiye",
        "ValueName": "türkiye"
      },
      {
        "Name": "eneba",
        "CommonName": "turkmenistan",
        "ValueName": "turkmenistan"
      },
      {
        "Name": "eneba",
        "CommonName": "turks and caicos islands",
        "ValueName": "turks and caicos islands"
      },
      {
        "Name": "eneba",
        "CommonName": "tuvalu",
        "ValueName": "tuvalu"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "uganda",
        "ValueName": "uganda"
      },
      {
        "Name": "eneba",
        "CommonName": "ukraine",
        "ValueName": "ukraine"
      },
      {
        "Name": "eneba",
        "CommonName": "ukraine",
        "ValueName": "ukraine"
      },
      {
        "Name": "eneba",
        "CommonName": "united arab emirates",
        "ValueName": "united arab emirates"
      },
      {
        "Name": "eneba",
        "CommonName": "united arab emirates",
        "ValueName": "united arab emirates"
      },
      {
        "Name": "eneba",
        "CommonName": "united kingdom of great britain and northern ireland",
        "ValueName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "united kingdom of great britain and northern ireland",
        "ValueName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "united kingdom of great britain and northern ireland",
        "ValueName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "united kingdom of great britain and northern ireland",
        "ValueName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "united kingdom of great britain and northern ireland",
        "ValueName": "united kingdom of great britain and northern ireland"
      },
      {
        "Name": "eneba",
        "CommonName": "united states of america",
        "ValueName": "united states of america"
      },
      {
        "Name": "eneba",
        "CommonName": "united states of america",
        "ValueName": "united states of america"
      },
      {
        "Name": "eneba",
        "CommonName": "united states of america",
        "ValueName": "united states of america"
      },
      {
        "Name": "eneba",
        "CommonName": "united states of america",
        "ValueName": "united states of america"
      },
      {
        "Name": "eneba",
        "CommonName": "united states of america",
        "ValueName": "united states of america"
      },
      {
        "Name": "eneba",
        "CommonName": "united states of america",
        "ValueName": "united states of america"
      },
      {
        "Name": "eneba",
        "CommonName": "united states minor outlying islands",
        "ValueName": "united states minor outlying islands"
      },
      {
        "Name": "eneba",
        "CommonName": "uruguay",
        "ValueName": "uruguay"
      },
      {
        "Name": "eneba",
        "CommonName": "uzbekistan",
        "ValueName": "uzbekistan"
      },
      {
        "Name": "eneba",
        "CommonName": "uzbekistan",
        "ValueName": "uzbekistan"
      },
      {
        "Name": "eneba",
        "CommonName": "vanuatu",
        "ValueName": "vanuatu"
      },
      {
        "Name": "eneba",
        "CommonName": "vanuatu",
        "ValueName": "vanuatu"
      },
      {
        "Name": "eneba",
        "CommonName": "venezuela (bolivarian republic of)",
        "ValueName": "venezuela (bolivarian republic of)"
      },
      {
        "Name": "eneba",
        "CommonName": "viet nam",
        "ValueName": "viet nam"
      },
      {
        "Name": "eneba",
        "CommonName": "virgin islands (british)",
        "ValueName": "virgin islands (british)"
      },
      {
        "Name": "eneba",
        "CommonName": "virgin islands (u.s.)",
        "ValueName": "virgin islands (u.s.)"
      },
      {
        "Name": "eneba",
        "CommonName": "wallis and futuna",
        "ValueName": "wallis and futuna"
      },
      {
        "Name": "eneba",
        "CommonName": "western sahara",
        "ValueName": "western sahara"
      },
      {
        "Name": "eneba",
        "CommonName": "yemen",
        "ValueName": "yemen"
      },
      {
        "Name": "eneba",
        "CommonName": "zambia",
        "ValueName": "zambia"
      },
      {
        "Name": "eneba",
        "CommonName": "zambia",
        "ValueName": "zambia"
      },
      {
        "Name": "eneba",
        "CommonName": "zimbabwe",
        "ValueName": "zimbabwe"
      },
      {
        "Name": "eneba",
        "CommonName": "zimbabwe",
        "ValueName": "zimbabwe"
      },
      {
        "Name": "eneba",
        "CommonName": "zimbabwe",
        "ValueName": "zimbabwe"
      }
    ]
  },
]);
