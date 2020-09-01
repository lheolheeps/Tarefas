const bancos = [
    {
      "numero": "001",
      "nome": "Banco do Brasil S.A."
    },
    {
      "numero": "003",
      "nome": "Banco da Amazônia S.A."
    },
    {
      "numero": "004",
      "nome": "Banco do Nordeste do Brasil S.A."
    },
    {
      "numero": "007",
      "nome": "Banco Nacional de Desenvolvimento Econômico e Social BNDES"
    },
    {
      "numero": "010",
      "nome": "Credicoamo Crédito Rural Cooperativa"
    },
    {
      "numero": "011",
      "nome": "Credit Suisse Hedging-Griffo Corretora de Valores S.A."
    },
    {
      "numero": "012",
      "nome": "Banco Inbursa S.A."
    },
    {
      "numero": "014",
      "nome": "Natixis Brasil S.A. Banco Múltiplo"
    },
    {
      "numero": "015",
      "nome": "UBS Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A."
    },
    {
      "numero": "016",
      "nome": "Coop de Créd. Mútuo dos Despachantes de Trânsito de SC e Rio Grande do Sul"
    },
    {
      "numero": "017",
      "nome": "BNY Mellon Banco S.A."
    },
    {
      "numero": "018",
      "nome": "Banco Tricury S.A."
    },
    {
      "numero": "021",
      "nome": "Banestes S.A. Banco do Estado do Espírito Santo"
    },
    {
      "numero": "024",
      "nome": "Banco Bandepe S.A."
    },
    {
      "numero": "025",
      "nome": "Banco Alfa S.A."
    },
    {
      "numero": "029",
      "nome": "Banco Itaú Consignado S.A."
    },
    {
      "numero": "033",
      "nome": "Banco Santander (Brasil) S. A."
    },
    {
      "numero": "036",
      "nome": "Banco Bradesco BBI S.A."
    },
    {
      "numero": "037",
      "nome": "Banco do Estado do Pará S.A."
    },
    {
      "numero": "040",
      "nome": "Banco Cargill S.A."
    },
    {
      "numero": "041",
      "nome": "Banco do Estado do Rio Grande do Sul S.A."
    },
    {
      "numero": "047",
      "nome": "Banco do Estado de Sergipe S.A."
    },
    {
      "numero": "060",
      "nome": "Confidence Corretora de Câmbio S.A."
    },
    {
      "numero": "062",
      "nome": "Hipercard Banco Múltiplo S.A."
    },
    {
      "numero": "063",
      "nome": "Banco Bradescard S.A."
    },
    {
      "numero": "064",
      "nome": "Goldman Sachs do Brasil  Banco Múltiplo S. A."
    },
    {
      "numero": "065",
      "nome": "Banco AndBank (Brasil) S.A."
    },
    {
      "numero": "066",
      "nome": "Banco Morgan Stanley S. A."
    },
    {
      "numero": "069",
      "nome": "Banco Crefisa S.A."
    },
    {
      "numero": "070",
      "nome": "Banco de Brasília S.A."
    },
    {
      "numero": "074",
      "nome": "Banco J. Safra S.A."
    },
    {
      "numero": "075",
      "nome": "Banco ABN Amro S.A."
    },
    {
      "numero": "076",
      "nome": "Banco KDB do Brasil S.A."
    },
    {
      "numero": "077",
      "nome": "Banco Inter S.A."
    },
    {
      "numero": "078",
      "nome": "Haitong Banco de Investimento do Brasil S.A."
    },
    {
      "numero": "079",
      "nome": "Banco Original do Agronegócio S.A."
    },
    {
      "numero": "080",
      "nome": "BT Corretora de Câmbio Ltda."
    },
    {
      "numero": "081",
      "nome": "BBN Banco Brasileiro de Negocios S.A."
    },
    {
      "numero": "082",
      "nome": "Banco Topazio S.A."
    },
    {
      "numero": "083",
      "nome": "Banco da China Brasil S.A."
    },
    {
      "numero": "084",
      "nome": "Uniprime Norte do Paraná - Cooperativa de Crédito Ltda."
    },
    {
      "numero": "085",
      "nome": "Cooperativa Central de Crédito Urbano - Cecred"
    },
    {
      "numero": "089",
      "nome": "Cooperativa de Crédito Rural da Região da Mogiana"
    },
    {
      "numero": "091",
      "nome": "Central de Cooperativas de Economia e Crédito Mútuo do Est RS - Unicred"
    },
    {
      "numero": "092",
      "nome": "BRK S.A. Crédito, Financiamento e Investimento"
    },
    {
      "numero": "093",
      "nome": "Pólocred Sociedade de Crédito ao Microempreendedor e à Empresa de Pequeno Porte"
    },
    {
      "numero": "094",
      "nome": "Banco Finaxis S.A."
    },
    {
      "numero": "095",
      "nome": "Banco Confidence de Câmbio S.A."
    },
    {
      "numero": "096",
      "nome": "Banco BMFBovespa de Serviços de Liquidação e Custódia S/A"
    },
    {
      "numero": "097",
      "nome": "Cooperativa Central de Crédito Noroeste Brasileiro Ltda - CentralCredi"
    },
    {
      "numero": "098",
      "nome": "Credialiança Cooperativa de Crédito Rural"
    },
    {
      "numero": "099",
      "nome": "Uniprime Central – Central Interestadual de Cooperativas de Crédito Ltda."
    },
    {
      "numero": "100",
      "nome": "Planner Corretora de Valores S.A."
    },
    {
      "numero": "101",
      "nome": "Renascença Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "102",
      "nome": "XP Investimentos Corretora de Câmbio Títulos e Valores Mobiliários S.A."
    },
    {
      "numero": "104",
      "nome": "Caixa Econômica Federal"
    },
    {
      "numero": "105",
      "nome": "Lecca Crédito, Financiamento e Investimento S/A"
    },
    {
      "numero": "107",
      "nome": "Banco Bocom BBM S.A."
    },
    {
      "numero": "108",
      "nome": "PortoCred S.A. Crédito, Financiamento e Investimento"
    },
    {
      "numero": "111",
      "nome": "Oliveira Trust Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
      "numero": "113",
      "nome": "Magliano S.A. Corretora de Cambio e Valores Mobiliarios"
    },
    {
      "numero": "114",
      "nome": "Central Cooperativa de Crédito no Estado do Espírito Santo - CECOOP"
    },
    {
      "numero": "117",
      "nome": "Advanced Corretora de Câmbio Ltda."
    },
    {
      "numero": "118",
      "nome": "Standard Chartered Bank (Brasil) S.A. Banco de Investimento"
    },
    {
      "numero": "119",
      "nome": "Banco Western Union do Brasil S.A."
    },
    {
      "numero": "120",
      "nome": "Banco Rodobens SA"
    },
    {
      "numero": "121",
      "nome": "Banco Agibank S.A."
    },
    {
      "numero": "122",
      "nome": "Banco Bradesco BERJ S.A."
    },
    {
      "numero": "124",
      "nome": "Banco Woori Bank do Brasil S.A."
    },
    {
      "numero": "125",
      "nome": "Brasil Plural S.A. Banco Múltiplo"
    },
    {
      "numero": "126",
      "nome": "BR Partners Banco de Investimento S.A."
    },
    {
      "numero": "127",
      "nome": "Codepe Corretora de Valores e Câmbio S.A."
    },
    {
      "numero": "128",
      "nome": "MS Bank S.A. Banco de Câmbio"
    },
    {
      "numero": "129",
      "nome": "UBS Brasil Banco de Investimento S.A."
    },
    {
      "numero": "130",
      "nome": "Caruana S.A. Sociedade de Crédito, Financiamento e Investimento"
    },
    {
      "numero": "131",
      "nome": "Tullett Prebon Brasil Corretora de Valores e Câmbio Ltda."
    },
    {
      "numero": "132",
      "nome": "ICBC do Brasil Banco Múltiplo S.A."
    },
    {
      "numero": "133",
      "nome": "Confederação Nacional das Cooperativas Centrais de Crédito e Economia Familiar e"
    },
    {
      "numero": "134",
      "nome": "BGC Liquidez Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "135",
      "nome": "Gradual Corretora de Câmbio, Títulos e Valores Mobiliários S.A."
    },
    {
      "numero": "136",
      "nome": "Confederação Nacional das Cooperativas Centrais Unicred Ltda – Unicred do Brasil"
    },
    {
      "numero": "137",
      "nome": "Multimoney Corretora de Câmbio Ltda"
    },
    {
      "numero": "138",
      "nome": "Get Money Corretora de Câmbio S.A."
    },
    {
      "numero": "139",
      "nome": "Intesa Sanpaolo Brasil S.A. - Banco Múltiplo"
    },
    {
      "numero": "140",
      "nome": "Easynvest - Título Corretora de Valores SA"
    },
    {
      "numero": "142",
      "nome": "Broker Brasil Corretora de Câmbio Ltda."
    },
    {
      "numero": "143",
      "nome": "Treviso Corretora de Câmbio S.A."
    },
    {
      "numero": "144",
      "nome": "Bexs Banco de Câmbio S.A."
    },
    {
      "numero": "145",
      "nome": "Levycam - Corretora de Câmbio e Valores Ltda."
    },
    {
      "numero": "146",
      "nome": "Guitta Corretora de Câmbio Ltda."
    },
    {
      "numero": "149",
      "nome": "Facta Financeira S.A. - Crédito Financiamento e Investimento"
    },
    {
      "numero": "157",
      "nome": "ICAP do Brasil Corretora de Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "159",
      "nome": "Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor"
    },
    {
      "numero": "163",
      "nome": "Commerzbank Brasil S.A. - Banco Múltiplo"
    },
    {
      "numero": "169",
      "nome": "Banco Olé Bonsucesso Consignado S.A."
    },
    {
      "numero": "172",
      "nome": "Albatross Corretora de Câmbio e Valores S.A"
    },
    {
      "numero": "173",
      "nome": "BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
      "numero": "174",
      "nome": "Pernambucanas Financiadora S.A. Crédito, Financiamento e Investimento"
    },
    {
      "numero": "177",
      "nome": "Guide Investimentos S.A. Corretora de Valores"
    },
    {
      "numero": "180",
      "nome": "CM Capital Markets Corretora de Câmbio, Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "182",
      "nome": "Dacasa Financeira S/A - Sociedade de Crédito, Financiamento e Investimento"
    },
    {
      "numero": "183",
      "nome": "Socred S.A. - Sociedade de Crédito ao Microempreendedor"
    },
    {
      "numero": "184",
      "nome": "Banco Itaú BBA S.A."
    },
    {
      "numero": "188",
      "nome": "Ativa Investimentos S.A. Corretora de Títulos Câmbio e Valores"
    },
    {
      "numero": "189",
      "nome": "HS Financeira S/A Crédito, Financiamento e Investimentos"
    },
    {
      "numero": "190",
      "nome": "Cooperativa de Economia e Crédito Mútuo dos Servidores Públicos Estaduais do Rio"
    },
    {
      "numero": "191",
      "nome": "Nova Futura Corretora de Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "194",
      "nome": "Parmetal Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "196",
      "nome": "Fair Corretora de Câmbio S.A."
    },
    {
      "numero": "197",
      "nome": "Stone Pagamentos S.A."
    },
    {
      "numero": "204",
      "nome": "Banco Bradesco Cartões S.A."
    },
    {
      "numero": "208",
      "nome": "Banco BTG Pactual S.A."
    },
    {
      "numero": "212",
      "nome": "Banco Original S.A."
    },
    {
      "numero": "213",
      "nome": "Banco Arbi S.A."
    },
    {
      "numero": "217",
      "nome": "Banco John Deere S.A."
    },
    {
      "numero": "218",
      "nome": "Banco BS2 S.A."
    },
    {
      "numero": "222",
      "nome": "Banco Credit Agrícole Brasil S.A."
    },
    {
      "numero": "224",
      "nome": "Banco Fibra S.A."
    },
    {
      "numero": "233",
      "nome": "Banco Cifra S.A."
    },
    {
      "numero": "237",
      "nome": "Banco Bradesco S.A."
    },
    {
      "numero": "241",
      "nome": "Banco Clássico S.A."
    },
    {
      "numero": "243",
      "nome": "Banco Máxima S.A."
    },
    {
      "numero": "246",
      "nome": "Banco ABC Brasil S.A."
    },
    {
      "numero": "249",
      "nome": "Banco Investcred Unibanco S.A."
    },
    {
      "numero": "250",
      "nome": "BCV - Banco de Crédito e Varejo S/A"
    },
    {
      "numero": "253",
      "nome": "Bexs Corretora de Câmbio S/A"
    },
    {
      "numero": "254",
      "nome": "Parana Banco S. A."
    },
    {
      "numero": "260",
      "nome": "Nu Pagamentos S.A."
    },
    {
      "numero": "265",
      "nome": "Banco Fator S.A."
    },
    {
      "numero": "266",
      "nome": "Banco Cédula S.A."
    },
    {
      "numero": "268",
      "nome": "Barigui Companhia Hipotecária"
    },
    {
      "numero": "269",
      "nome": "HSBC Brasil S.A. Banco de Investimento"
    },
    {
      "numero": "271",
      "nome": "IB Corretora de Câmbio, Títulos e Valores Mobiliários Ltda."
    },
    {
      "numero": "300",
      "nome": "Banco de la Nacion Argentina"
    },
    {
      "numero": "318",
      "nome": "Banco BMG S.A."
    },
    {
      "numero": "320",
      "nome": "China Construction Bank (Brasil) Banco Múltiplo S/A"
    },
    {
      "numero": "341",
      "nome": "Itaú Unibanco  S.A."
    },
    {
      "numero": "366",
      "nome": "Banco Société Générale Brasil S.A."
    },
    {
      "numero": "370",
      "nome": "Banco Mizuho do Brasil S.A."
    },
    {
      "numero": "376",
      "nome": "Banco J. P. Morgan S. A."
    },
    {
      "numero": "389",
      "nome": "Banco Mercantil do Brasil S.A."
    },
    {
      "numero": "394",
      "nome": "Banco Bradesco Financiamentos S.A."
    },
    {
      "numero": "399",
      "nome": "Kirton Bank S.A. - Banco Múltiplo"
    },
    {
      "numero": "412",
      "nome": "Banco Capital S. A."
    },
    {
      "numero": "422",
      "nome": "Banco Safra S.A."
    },
    {
      "numero": "456",
      "nome": "Banco MUFG Brasil S.A."
    },
    {
      "numero": "464",
      "nome": "Banco Sumitomo Mitsui Brasileiro S.A."
    },
    {
      "numero": "473",
      "nome": "Banco Caixa Geral - Brasil S.A."
    },
    {
      "numero": "477",
      "nome": "Citibank N.A."
    },
    {
      "numero": "479",
      "nome": "Banco ItauBank S.A."
    },
    {
      "numero": "487",
      "nome": "Deutsche Bank S.A. - Banco Alemão"
    },
    {
      "numero": "488",
      "nome": "JPMorgan Chase Bank, National Association"
    },
    {
      "numero": "492",
      "nome": "ING Bank N.V."
    },
    {
      "numero": "494",
      "nome": "Banco de La Republica Oriental del Uruguay"
    },
    {
      "numero": "495",
      "nome": "Banco de La Provincia de Buenos Aires"
    },
    {
      "numero": "505",
      "nome": "Banco Credit Suisse (Brasil) S.A."
    },
    {
      "numero": "545",
      "nome": "Senso Corretora de Câmbio e Valores Mobiliários S.A."
    },
    {
      "numero": "600",
      "nome": "Banco Luso Brasileiro S.A."
    },
    {
      "numero": "604",
      "nome": "Banco Industrial do Brasil S.A."
    },
    {
      "numero": "610",
      "nome": "Banco VR S.A."
    },
    {
      "numero": "611",
      "nome": "Banco Paulista S.A."
    },
    {
      "numero": "612",
      "nome": "Banco Guanabara S.A."
    },
    {
      "numero": "613",
      "nome": "Omni Banco S.A."
    },
    {
      "numero": "623",
      "nome": "Banco Pan S.A."
    },
    {
      "numero": "626",
      "nome": "Banco Ficsa S. A."
    },
    {
      "numero": "630",
      "nome": "Banco Intercap S.A."
    },
    {
      "numero": "633",
      "nome": "Banco Rendimento S.A."
    },
    {
      "numero": "634",
      "nome": "Banco Triângulo S.A."
    },
    {
      "numero": "637",
      "nome": "Banco Sofisa S. A."
    },
    {
      "numero": "641",
      "nome": "Banco Alvorada S.A."
    },
    {
      "numero": "643",
      "nome": "Banco Pine S.A."
    },
    {
      "numero": "652",
      "nome": "Itaú Unibanco Holding S.A."
    },
    {
      "numero": "653",
      "nome": "Banco Indusval S. A."
    },
    {
      "numero": "654",
      "nome": "Banco A. J. Renner S.A."
    },
    {
      "numero": "655",
      "nome": "Banco Votorantim S.A."
    },
    {
      "numero": "707",
      "nome": "Banco Daycoval S.A."
    },
    {
      "numero": "712",
      "nome": "Banco Ourinvest S.A."
    },
    {
      "numero": "719",
      "nome": "Banif - Bco Internacional do Funchal (Brasil) S.A."
    },
    {
      "numero": "735",
      "nome": "Banco Neon S.A."
    },
    {
      "numero": "739",
      "nome": "Banco Cetelem S.A."
    },
    {
      "numero": "741",
      "nome": "Banco Ribeirão Preto S.A."
    },
    {
      "numero": "743",
      "nome": "Banco Semear S.A."
    },
    {
      "numero": "745",
      "nome": "Banco Citibank S.A."
    },
    {
      "numero": "746",
      "nome": "Banco Modal S.A."
    },
    {
      "numero": "747",
      "nome": "Banco Rabobank International Brasil S.A."
    },
    {
      "numero": "748",
      "nome": "Banco Cooperativo Sicredi S. A."
    },
    {
      "numero": "751",
      "nome": "Scotiabank Brasil S.A. Banco Múltiplo"
    },
    {
      "numero": "752",
      "nome": "Banco BNP Paribas Brasil S.A."
    },
    {
      "numero": "753",
      "nome": "Novo Banco Continental S.A. - Banco Múltiplo"
    },
    {
      "numero": "754",
      "nome": "Banco Sistema S.A."
    },
    {
      "numero": "755",
      "nome": "Bank of America Merrill Lynch Banco Múltiplo S.A."
    },
    {
      "numero": "756",
      "nome": "Banco Cooperativo do Brasil S/A - Bancoob"
    },
    {
      "numero": "757",
      "nome": "Banco Keb Hana do Brasil S. A."
    }
  ];

  export default bancos;