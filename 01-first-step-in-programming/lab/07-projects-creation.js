function printInfoAboutProjects(architectName, projectsCount) {
    const hoursForProjectCompletion = 3;
    const neededHours = hoursForProjectCompletion * projectsCount;
    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projectsCount} project/s.`);
}

printInfoAboutProjects("George", 4);
printInfoAboutProjects("Sanya", 9);