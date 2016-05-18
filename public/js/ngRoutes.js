recruitApp.config(function($routeProvider) {
    
    $routeProvider.
    
        when('/', {
            templateUrl: '../views/clients.html',
            controller: 'clientsCtrl',
            css: ['../css/main.css', '../css/clients&projects.css', '../css/clients&projectsMediaQueries.css']
        }).
        
        when('/client/:clientID', {
            templateUrl: '../views/projects.html',
            controller: 'projectsCtrl',
            css: ['../css/main.css', '../css/clients&projects.css', '../css/clients&projectsMediaQueries.css']
        }).
        
        when('/client/:clientID/detailsOfProject/:projectID', {
            templateUrl: '../views/detailsOfProject.html',
            controller: 'detailsOfProjectCtrl',
            css: ['../css/main.css', '../css/detailsOfProject.css', '../css/detailsOfProjectMediaQueries.css']
        }).
        
        when('/detailsOfCandidate/:candidateID', {
            templateUrl: '../views/detailsOfCandidate.html',
            controller: 'detailsOfCandidateCtrl',
            css: ['../css/main.css', '../css/detailsOfCandidate.css', '../css/detailsOfCandidateMediaQueries.css']
        }).
        
        when('/searchCandidates', {
            templateUrl: '../views/searchCandidates.html',
            controller: 'searchCandidatesCtrl',
            css: ['../css/main.css', '../css/searchCandidates.css', '../css/searchCandidatesMediaQueries.css']
        });
        
});