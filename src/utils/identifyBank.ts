/* eslint-disable quote-props */
interface Banks {
  [cod: string]: string
}

export const identifyBank = (cod: string) => {
  const banks: Banks = {
    '001': 'Banco do Brasil S.A.',
    '003': 'BANCO DA AMAZONIA S.A.',
    '004': 'Banco do Nordeste do Brasil S.A.',
    '007': 'BANCO NACIONAL DE DESENVOLVIMENTO ECONOMICO E SOCIAL',
    '010': 'CREDICOAMO CREDITO RURAL COOPERATIVA',
    '011': 'CREDIT SUISSE HEDGING-GRIFFO CORRETORA DE VALORES S.A',
    '012': 'Banco Inbursa S.A.',
    '014': 'STATE STREET BRASIL S.A. ? BANCO COMERCIAL',
    '015': 'UBS Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A.',
    '016': 'COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RI',
    '017': 'BNY Mellon Banco S.A.',
    '018': 'Banco Tricury S.A.',
    '021': 'BANESTES S.A. BANCO DO ESTADO DO ESPIRITO SANTO',
    '024': 'Banco Bandepe S.A.',
    '025': 'Banco Alfa S.A.',
    '029': 'Banco Itaú Consignado S.A.',
    '033': 'BANCO SANTANDER (BRASIL) S.A.',
    '036': 'Banco Bradesco BBI S.A.',
    '037': 'Banco do Estado do Pará S.A.',
    '040': 'Banco Cargill S.A.',
    '041': 'Banco do Estado do Rio Grande do Sul S.A.',
    '047': 'Banco do Estado de Sergipe S.A.',
    '060': 'Confidence Corretora de Câmbio S.A.',
    '062': 'Hipercard Banco Múltiplo S.A.',
    '063': 'Banco Bradescard S.A.',
    '064': 'GOLDMAN SACHS DO BRASIL BANCO MULTIPLO S.A.',
    '065': 'Banco AndBank (Brasil) S.A.',
    '066': 'BANCO MORGAN STANLEY S.A.',
    '069': 'Banco Crefisa S.A.',
    '070': 'BRB – BANCO DE BRASILIA S.A.',
    '074': 'Banco J. Safra S.A.',
    '075': 'Banco ABN Amro S.A.',
    '076': 'Banco KDB do Brasil S.A.',
    '077': 'Banco Inter S.A.',
    '078': 'Haitong Banco de Investimento do Brasil S.A.',
    '079': 'Banco Original do Agronegócio S.A.',
    '080': 'B&T CORRETORA DE CAMBIO LTDA.',
    '081': 'BancoSeguro S.A.',
    '082': 'BANCO TOPÁZIO S.A.',
    '083': 'Banco da China Brasil S.A.',
    '084': 'UNIPRIME NORTE DO PARANÁ – COOPERATIVA DE CRÉDITO LTDA',
    '085': 'Cooperativa Central de Crédito – Ailos',
    '088': 'BANCO RANDON S.A.',
    '089': 'CREDISAN COOPERATIVA DE CRÉDITO',
    '091': 'CENTRAL DE COOPERATIVAS DE ECONOMIA E CRÉDITO MÚTUO DO ESTADO DO RIO GRANDE DO S',
    '092': 'BRK S.A. Crédito, Financiamento e Investimento',
    '093': 'PÓLOCRED   SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORT',
    '094': 'Banco Finaxis S.A.',
    '095': 'Travelex Banco de Câmbio S.A.',
    '096': 'Banco B3 S.A.',
    '097': 'Credisis – Central de Cooperativas de Crédito Ltda.',
    '098': 'Credialiança Cooperativa de Crédito Rural',
    '099': 'UNIPRIME CENTRAL – CENTRAL INTERESTADUAL DE COOPERATIVAS DE CREDITO LTDA.',
    '100': 'Planner Corretora de Valores S.A.',
    '101': 'RENASCENCA DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA',
    '102': 'XP INVESTIMENTOS CORRETORA DE CÂMBIO,TÍTULOS E VALORES MOBILIÁRIOS S/A',
    '104': 'CAIXA ECONOMICA FEDERAL',
    '105': 'Lecca Crédito, Financiamento e Investimento S/A',
    '107': 'Banco Bocom BBM S.A.',
    '108': 'PORTOCRED S.A. – CREDITO, FINANCIAMENTO E INVESTIMENTO',
    '111': 'OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIARIOS S.A.',
    '113': 'Magliano S.A. Corretora de Cambio e Valores Mobiliarios',
    '114': 'Central Cooperativa de Crédito no Estado do Espírito Santo – CECOOP',
    '117': 'ADVANCED CORRETORA DE CÂMBIO LTDA',
    '119': 'Banco Western Union do Brasil S.A.',
    '120': 'BANCO RODOBENS S.A.',
    '121': 'Banco Agibank S.A.',
    '122': 'Banco Bradesco BERJ S.A.',
    '124': 'Banco Woori Bank do Brasil S.A.',
    '125': 'Plural S.A. Banco Múltiplo',
    '126': 'BR Partners Banco de Investimento S.A.',
    '127': 'Codepe Corretora de Valores e Câmbio S.A.',
    '128': 'MS Bank S.A. Banco de Câmbio',
    '129': 'UBS Brasil Banco de Investimento S.A.',
    '130': 'CARUANA S.A. – SOCIEDADE DE CRÉDITO, FINANCIAMENTO E INVESTIMENTO',
    '131': 'TULLETT PREBON BRASIL CORRETORA DE VALORES E CÂMBIO LTDA',
    '132': 'ICBC do Brasil Banco Múltiplo S.A.',
    '133': 'CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS DE CRÉDITO E ECONOMIA FAMILIAR E',
    '134': 'BGC LIQUIDEZ DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA',
    '136': 'CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS UNICRED LTDA. – UNICRED DO BRASI',
    '138': 'Get Money Corretora de Câmbio S.A.',
    '139': 'Intesa Sanpaolo Brasil S.A. – Banco Múltiplo',
    '140': 'Easynvest – Título Corretora de Valores SA',
    '142': 'Broker Brasil Corretora de Câmbio Ltda.',
    '143': 'Treviso Corretora de Câmbio S.A.',
    '144': 'BEXS BANCO DE CÂMBIO S/A',
    '145': 'LEVYCAM – CORRETORA DE CAMBIO E VALORES LTDA.',
    '146': 'GUITTA CORRETORA DE CAMBIO LTDA.',
    '149': 'Facta Financeira S.A. – Crédito Financiamento e Investimento',
    '157': 'ICAP do Brasil Corretora de Títulos e Valores Mobiliários Ltda.',
    '159': 'Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor',
    '163': 'Commerzbank Brasil S.A. – Banco Múltiplo',
    '169': 'BANCO OLÉ CONSIGNADO S.A.',
    '173': 'BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A.',
    '174': 'PEFISA S.A. – CRÉDITO, FINANCIAMENTO E INVESTIMENTO',
    '177': 'Guide Investimentos S.A. Corretora de Valores',
    '180': 'CM CAPITAL MARKETS CORRETORA DE CÂMBIO, TÍTULOS E VALORES MOBILIÁRIOS LTDA',
    '183': 'SOCRED S.A. – SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO P',
    '184': 'Banco Itaú BBA S.A.',
    '188': 'ATIVA INVESTIMENTOS S.A. CORRETORA DE TÍTULOS, CÂMBIO E VALORES',
    '189': 'HS FINANCEIRA S/A CREDITO, FINANCIAMENTO E INVESTIMENTOS',
    '190': 'SERVICOOP – COOPERATIVA DE CRÉDITO DOS SERVIDORES PÚBLICOS ESTADUAIS DO RIO GRAN',
    '191': 'Nova Futura Corretora de Títulos e Valores Mobiliários Ltda.',
    '194': 'PARMETAL DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA',
    '196': 'FAIR CORRETORA DE CAMBIO S.A.',
    '197': 'Stone Pagamentos S.A.',
    '208': 'Banco BTG Pactual S.A.',
    '212': 'Banco Original S.A.',
    '213': 'Banco Arbi S.A.',
    '217': 'Banco John Deere S.A.',
    '218': 'Banco BS2 S.A.',
    '222': 'BANCO CRÉDIT AGRICOLE BRASIL S.A.',
    '224': 'Banco Fibra S.A.',
    '233': 'Banco Cifra S.A.',
    '237': 'Banco Bradesco S.A.',
    '241': 'BANCO CLASSICO S.A.',
    '243': 'Banco Máxima S.A.',
    '246': 'Banco ABC Brasil S.A.',
    '249': 'Banco Investcred Unibanco S.A.',
    '250': 'BCV – BANCO DE CRÉDITO E VAREJO S.A.',
    '253': 'Bexs Corretora de Câmbio S/A',
    '254': 'PARANÁ BANCO S.A.',
    '259': 'MONEYCORP BANCO DE CÂMBIO S.A.',
    '260': 'Nu Pagamentos S.A.',
    '265': 'Banco Fator S.A.',
    '266': 'BANCO CEDULA S.A.',
    '268': 'BARI COMPANHIA HIPOTECÁRIA',
    '269': 'BANCO HSBC S.A.',
    '270': 'Sagitur Corretora de Câmbio Ltda.',
    '271': 'IB Corretora de Câmbio, Títulos e Valores Mobiliários S.A.',
    '272': 'AGK CORRETORA DE CAMBIO S.A.',
    '273': 'Cooperativa de Crédito Rural de São Miguel do Oeste – Sulcredi/São Miguel',
    '274': 'MONEY PLUS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORT',
    '276': 'Senff S.A. – Crédito, Financiamento e Investimento',
    '278': 'Genial Investimentos Corretora de Valores Mobiliários S.A.',
    '279': 'COOPERATIVA DE CREDITO RURAL DE PRIMAVERA DO LESTE',
    '280': 'Avista S.A. Crédito, Financiamento e Investimento',
    '281': 'Cooperativa de Crédito Rural Coopavel',
    '283': 'RB CAPITAL INVESTIMENTOS DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LIMITADA',
    '285': 'Frente Corretora de Câmbio Ltda.',
    '286': 'COOPERATIVA DE CRÉDITO RURAL DE OURO   SULCREDI/OURO',
    '288': 'CAROL DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA.',
    '289': 'DECYSEO CORRETORA DE CAMBIO LTDA.',
    '290': 'Pagseguro Internet S.A.',
    '292': 'BS2 Distribuidora de Títulos e Valores Mobiliários S.A.',
    '293': 'Lastro RDV Distribuidora de Títulos e Valores Mobiliários Ltda.',
    '296': 'VISION S.A. CORRETORA DE CAMBIO',
    '298': 'Vip’s Corretora de Câmbio Ltda.',
    '299': 'SOROCRED   CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A.',
    '300': 'Banco de la Nacion Argentina',
    '301': 'BPP Instituição de Pagamento S.A.',
    '306': 'PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA.',
    '307': 'Terra Investimentos Distribuidora de Títulos e Valores Mobiliários Ltda.',
    '309': 'CAMBIONET CORRETORA DE CÂMBIO LTDA.',
    '310': 'VORTX DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA.',
    '313': 'AMAZÔNIA CORRETORA DE CÂMBIO LTDA.',
    '315': 'PI Distribuidora de Títulos e Valores Mobiliários S.A.',
    '318': 'Banco BMG S.A.',
    '319': 'OM DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA',
    '320': 'China Construction Bank (Brasil) Banco Múltiplo S/A',
    '321': 'CREFAZ SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE LT',
    '322': 'Cooperativa de Crédito Rural de Abelardo Luz – Sulcredi/Crediluz',
    '323': 'MERCADOPAGO.COM REPRESENTACOES LTDA.',
    '324': 'CARTOS SOCIEDADE DE CRÉDITO DIRETO S.A.',
    '325': 'Órama Distribuidora de Títulos e Valores Mobiliários S.A.',
    '326': 'PARATI – CREDITO, FINANCIAMENTO E INVESTIMENTO S.A.',
    '329': 'QI Sociedade de Crédito Direto S.A.',
    '330': 'BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A.',
    '331': 'Fram Capital Distribuidora de Títulos e Valores Mobiliários S.A.',
    '332': 'Acesso Soluções de Pagamento S.A.',
    '335': 'Banco Digio S.A.',
    '336': 'Banco C6 S.A.',
    '340': 'Super Pagamentos e Administração de Meios Eletrônicos S.A.',
    '341': 'ITAÚ UNIBANCO S.A.',
    '342': 'Creditas Sociedade de Crédito Direto S.A.',
    '343': 'FFA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA.',
    '348': 'Banco XP S.A.',
    '349': 'AL5 S.A. CRÉDITO, FINANCIAMENTO E INVESTIMENTO',
    '350': 'COOPERATIVA DE CRÉDITO RURAL DE PEQUENOS AGRICULTORES E DA REFORMA AGRÁRIA DO CE',
    '352': 'TORO CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA',
    '354': 'NECTON INVESTIMENTOS  S.A. CORRETORA DE VALORES MOBILIÁRIOS E COMMODITIES',
    '355': 'ÓTIMO SOCIEDADE DE CRÉDITO DIRETO S.A.',
    '359': 'ZEMA CRÉDITO, FINANCIAMENTO E INVESTIMENTO S/A',
    '360': 'TRINUS CAPITAL DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A.',
    '362': 'CIELO S.A.',
    '363': 'SOCOPA SOCIEDADE CORRETORA PAULISTA S.A.',
    '364': 'GERENCIANET S.A.',
    '365': 'SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIARIOS',
    '366': 'BANCO SOCIETE GENERALE BRASIL S.A.',
    '367': 'VITREO DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A.',
    '368': 'Banco CSF S.A.',
    '370': 'Banco Mizuho do Brasil S.A.',
    '371': 'WARREN CORRETORA DE VALORES MOBILIÁRIOS E CÂMBIO LTDA.',
    '373': 'UP.P SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A.',
    '374': 'REALIZE CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A.',
    '376': 'BANCO J.P. MORGAN S.A.',
    '377': 'MS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA',
    '378': 'BBC LEASING S.A. – ARRENDAMENTO MERCANTIL',
    '379': 'COOPERFORTE – COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS FUNCIONÁRIOS DE INSTIT',
    '380': 'PICPAY SERVICOS S.A.',
    '381': 'BANCO MERCEDES-BENZ DO BRASIL S.A.',
    '382': 'FIDÚCIA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE L',
    '383': 'BOLETOBANCÁRIO.COM TECNOLOGIA DE PAGAMENTOS LTDA.',
    '384': 'GLOBAL FINANÇAS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO',
    '387': 'Banco Toyota do Brasil S.A.',
    '389': 'Banco Mercantil do Brasil S.A.',
    '390': 'BANCO GM S.A.',
    '391': 'COOPERATIVA DE CREDITO RURAL DE IBIAM – SULCREDI/IBIAM',
    '393': 'Banco Volkswagen S.A.',
    '394': 'Banco Bradesco Financiamentos S.A.',
    '396': 'HUB PAGAMENTOS S.A',
    '397': 'LISTO SOCIEDADE DE CREDITO DIRETO S.A.',
    '399': 'Kirton Bank S.A. – Banco Múltiplo',
    '403': 'CORA SOCIEDADE DE CRÉDITO DIRETO S.A.',
    '404': 'SUMUP SOCIEDADE DE CRÉDITO DIRETO S.A.',
    '408': 'BÔNUSCRED SOCIEDADE DE CRÉDITO DIRETO S.A.',
    '412': 'BANCO CAPITAL S.A.',
    '422': 'Banco Safra S.A.',
    '456': 'Banco MUFG Brasil S.A.',
    '464': 'Banco Sumitomo Mitsui Brasileiro S.A.',
    '473': 'Banco Caixa Geral – Brasil S.A.',
    '477': 'Citibank N.A.',
    '479': 'Banco ItauBank S.A.',
    '487': 'DEUTSCHE BANK S.A. – BANCO ALEMAO',
    '488': 'JPMorgan Chase Bank, National Association',
    '492': 'ING Bank N.V.',
    '495': 'Banco de La Provincia de Buenos Aires',
    '505': 'Banco Credit Suisse (Brasil) S.A.',
    '545': 'SENSO CORRETORA DE CAMBIO E VALORES MOBILIARIOS S.A',
    '600': 'Banco Luso Brasileiro S.A.',
    '604': 'Banco Industrial do Brasil S.A.',
    '610': 'Banco VR S.A.',
    '611': 'Banco Paulista S.A.',
    '612': 'Banco Guanabara S.A.',
    '613': 'Omni Banco S.A.',
    '623': 'Banco Pan S.A.',
    '626': 'BANCO C6 CONSIGNADO S.A.',
    '630': 'Banco Smartbank S.A.',
    '633': 'Banco Rendimento S.A.',
    '634': 'BANCO TRIANGULO S.A.',
    '637': 'BANCO SOFISA S.A.',
    '643': 'Banco Pine S.A.',
    '652': 'Itaú Unibanco Holding S.A.',
    '653': 'BANCO INDUSVAL S.A.',
    '654': 'BANCO DIGIMAIS S.A.',
    '655': 'Banco Votorantim S.A.',
    '707': 'Banco Daycoval S.A.',
    '712': 'Banco Ourinvest S.A.',
    '739': 'Banco Cetelem S.A.',
    '741': 'BANCO RIBEIRAO PRETO S.A.',
    '743': 'Banco Semear S.A.',
    '745': 'Banco Citibank S.A.',
    '746': 'Banco Modal S.A.',
    '747': 'Banco Rabobank International Brasil S.A.',
    '748': 'BANCO COOPERATIVO SICREDI S.A.',
    '751': 'Scotiabank Brasil S.A. Banco Múltiplo',
    '752': 'Banco BNP Paribas Brasil S.A.',
    '753': 'Novo Banco Continental S.A. – Banco Múltiplo',
    '754': 'Banco Sistema S.A.',
    '755': 'Bank of America Merrill Lynch Banco Múltiplo S.A.',
    '756': 'BANCO COOPERATIVO DO BRASIL S.A. – BANCOOB',
    '757': 'BANCO KEB HANA DO BRASIL S.A.',
  };

  return banks[cod] || 'Unknown';
};
