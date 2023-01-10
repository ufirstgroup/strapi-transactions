local_resource(
    'Open tilt panel',
    'open -a "Google Chrome" http://localhost:10350/'
)

docker_compose('database/docker-compose.yml')

local_resource(
    'Strapi',
    'yarn',
    serve_cmd='yarn develop',
    deps=['package.json', 'yarn.lock'],
    resource_deps=['postgres'],
    links=[link('http://localhost:1337/admin', 'Open Backoffice')]
)