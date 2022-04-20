// Generate HTML

const teambuilder = team => {

    const mgrHtml = manager => {
        return `
        <section>
            <div class="card">
            <h1>${manager.getName()}</h1>
            <h2>${manager.getRole()}</h2>
        `
    }

    const engineerHtml = engineer => {
        return `
        <section>
            <div class="card">
            <p>${engineer.getName()}</p>
            <p>${engineer.getRole()}</p>
            <p>${engineer.getEmail()}</p>
            <p>${engineer.getGithub()}</p>
        `
    }

const internHtml = intern => {
    return `
    <section>
        <div class="card">
        <p>${intern.getName()}</p>
        <p>${intern.getRole()}</p>
        <p>${intern.getEmail()}</p>
        <p>${intern.getSchool()}</p>
        `

}

}