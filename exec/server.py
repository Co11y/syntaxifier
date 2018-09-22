from bottle import route, run, static_file, response


@route('/')
def entry():
    return static_file('index.html', root='cli')


@route('/static/<filename>')
def static(filename):
    return static_file(filename, root='cli')


@route('/parse/<callback>/<reqid>/<sentence>')
def api(callback, reqid, sentence):
    response.content_type = 'text/javascript;charset=utf-8'
    import run
    outpdata = run.main(sentence)
    return "%s('%s', %s)" % (callback, outpdata, reqid)


run(host='localhost', port=8080, debug=True)
