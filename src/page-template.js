const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-primary">
                            <h3>${intern.name}</h3>
                            <h4>Intern</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${intern.id}</p>
                            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p class="school">School:${intern.school}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                            </svg>
                        </div>
                    </div>
                </div>
    `;
};

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-primary">
                            <h3>${manager.name}</h3>
                            <h4>Manager</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${manager.id}</p>
                            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                            <p class="office">Office Number: ${manager.officeNumber}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                            </svg>
                        </div>
                    </div>
                </div>
    `;
};

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-primary">
                            <h3>${engineer.name}</h3>
                            <h4>Engineer</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${engineer.id}</p>
                            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                          </svg>
                        </div>
                    </div>
                </div>
    `;  
};

generateWebsite = (data) => {
    console.log(data);
    employeeArray = [];

    for (let x = 0; x < data.length; x++) {
        const worker = data[x];
        const role = worker.getRole();

        if(role === 'Engineer'){
            const engineerInfo = generateEngineer(worker);
            employeeArray.push(engineerInfo);
        }
        if (role === 'Intern') {
            const internInfo = generateIntern(worker);
            employeeArray.push(internInfo);
        }
        if (role === 'Manager') {
            const managerInfo = generateManager(worker);
            employeeArray.push(managerInfo);
        };
    }
    const employeeInfo = employeeArray.join('');
    
    const generateEmployees = createPage(employeeInfo);
    return generateEmployees;
}

const createPage = function(employeeInfo) {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
    
        <nav class="red-bar">
            <div class="container-fluid">
              <span class="navbar navbar-light" style="background-color: red;">My Team</span>
            </div>
          </nav>
      </head>
      <body>
      <div class="container The-team">
          <div class="row">
            ${employeeInfo}
          </div>
      </div>
  </div>
  </body>
  </html>
  
    `
}

module.exports = generateWebsite;