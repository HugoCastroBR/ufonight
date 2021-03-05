from connections import api
from model import Post, User, Search

def procurar(Last_search,Search_Results):

    Search = Search_Results
    try:
        Search_Results.clear()
    except AttributeError:
        Search_Results = []

    if Search != "":
        results = api.search(Search)
    else:
        results = api.search()
    # {'id': 3, 'Titulo': 'Teste 04', 'Verificado': 0, 'Pais': 'chile', 'Estado': '', 'Cidade': '', 'Tipo_nave': 'aredodna', 'especie': '', 'descricao': 'bb', 'nome_contatado_testemunhas': '', 'verificado_por': '', 'observacoes': 'b'}
    for result in results:
        Search_Results.append(Post.Result(result['Titulo'],result['descricao']))
    

    return Search_Results