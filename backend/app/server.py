from bottle import run, route, response, request
@route('/sse/vote/cats', method='POST')
def voting_for_cats():
    response.headers['Access-Control-Allow-Origin'] = '*'
    
@route('/sse/vote/cats')
def cats():
    response.content_type = 'text/event-stream'
    response.headers['Access-Control-Allow-Origin'] = '*'
run(
    server='waitress'
)

@route('/sse/vote/dogs', method='POST')
def voting_for_dogs():
    response.headers['Access-Control-Allow-Origin'] = '*'
    
@route('/sse/vote/dogs')
def dogs():
    response.content_type = 'text/event-stream'
    response.headers['Access-Control-Allow-Origin'] = '*'
run(
    server='waitress'
)

@route('/sse/vote/parrots', method='POST')
def voting_for_parrots():
    response.headers['Access-Control-Allow-Origin'] = '*'
    
@route('/sse/vote/parrots')
def parrots():
    response.content_type = 'text/event-stream'
    response.headers['Access-Control-Allow-Origin'] = '*'
run(
    server='waitress'
)

