//
const createRepo = {
    "title": 'Test Repo',
    "description": 'This is a test repo',
}

const getRepos = {
    "repos": [{
        "id": 1,
        "title": 'Test Repo 1',
    }, {
        "id": 2,
        "title": 'Test Repo 2',
    }, {
        "id": 3,
        "title": 'Test Repo 3',
    }]
}

const addDirectory = {
    "repo_id": 1,
    "title": 'Test directory',
}

const addFile = {
    "repo_id": 1,
    "directory_id": 1,
    "title": 'hello_world.js',
    "content": 'console.log("Hello, World!")',
}

const updateFile = {
    "repo_id": 1,
    "directory_id": 1,
    "file_id": 1,
    "title": 'hello_world.js',
    "content": 'console.log("Hello, World!")',
}

const getRepo = {
    "id": 1,
    "title": 'Test Repo 1',
    "description": 'This is a test repo',
    "created_at": '2020-01-01',
    "directories": [
        {
            "directory_id": 1,
            "directory_title": 'Test directory 1',
            "files": [
                {
                    "file_id": 1,
                    "file_title": 'hello_world.py',
                    "created_at": '2020-01-01',
                    "content": 'print("Hello, World!")',
                }
            ]
        },
        {
            "directory_id": 2,
            "title": 'Test directory 2',
            "created_at": '2020-01-01',
            "files": [
                {
                    "file_id": 2,
                    "file_title": 'index.html',
                    "created_at": '2020-01-01',
                    "content": '<html><body><h1>Hello, World!</h1></body></html>',
                }
            ]
        }
    ]
}



