class SignupPage {

    go() {

        cy.visit('/')
        cy.get('[class="pages__Title-sc-1ee1f2s-4 cFmqIK"]')
        .should('be.visible')
        .should('have.text', 'O banco com bugs e falhas do seu jeito')
        cy.get('[class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]').click()
    }

    fillform(register) {
        cy.xpath('/html/body/div/div/div[2]/div/div[2]/form/div[2]/input', {timeout: 5000 }).type(register.email, { force: true })
        cy.get('[placeholder="Informe seu Nome"]').type(register.name, { force: true })
        cy.xpath('/html/body/div/div/div[2]/div/div[2]/form/div[4]/div/input', { force: true }).type(register.password, { force: true })
        cy.xpath('/html/body/div/div/div[2]/div/div[2]/form/div[5]/div/input').type(register.password2, { force: true })
    }
    requiredFields() {
        cy.get('[placeholder="Informe seu Nome"]').type('Pedrinho', { force: true })
        cy.xpath('//*[@id="__next"]/div/div[2]/div/div[2]/form/div[2]/p').should('have.text','É campo obrigatório' )
        cy.xpath('/html/body/div/div/div[2]/div/div[2]/form/div[4]/div/p').should('have.text','É campo obrigatório' )
        cy.xpath('/html/body/div/div/div[2]/div/div[2]/form/div[5]/div/p').should('have.text','É campo obrigatório' )
    }

    submit() {
        cy.get('[class="style__ContainerButton-sc-1wsixal-0 CMabB button__child"]').click({ force: true })
    }
    modalValidation() {
        cy.get('[id="modalText"]').invoke('text').should('not.be.empty')
    }
    
    modalValidationName() {
        cy.contains('[id="modalText"]', 'Nome não pode ser vazio.')   

    }
    modalValidationEmail() {
        cy.contains('[id="modalText"]', 'Desculpe, e-mail já cadastrado.')   
    
    }
    addBalance() {
        cy.get('[id="toggleAddBalance"]').click({ force: true })
    }

    blankEmail() {
        cy.contains('[class="input__warging"]', 'É campo obrigatório')

    }
    incorrectPassword() {
        cy.get('[class="styles__Text-sc-8zteav-4 gpcLtj"]')
        .should('be.visible')
        .should('have.text', 'As senhas não são iguais.\n' )
    
    }
    alertMessageShouldBe(expectedMessage) {
            //cy.get('span[class=alert-error').should('have.text', expectedMessage)
    cy.contains('[class="input__warging"]', expectedMessage).should('be.visible')
    }
}

export default new SignupPage;