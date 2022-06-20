import signup from '../pages/SignupPage'

describe('BugBank', function () {

    beforeEach(function () {
        cy.fixture('user.json').then((reg) => {
            this.register = reg
        })
    })
    it('BugBankHome', function () {
        signup.go()
    })

    it('Criação de Conta', function () {
        signup.go()
        signup.fillform(this.register.signup)
        signup.submit()
    })

    it('Criação de conta com saldo', function () {
        signup.go()
        signup.fillform(this.register.signup)
        signup.addBalance()
        signup.submit()
        signup.modalValidation()
    })
    it('Campos não informados', function () {
        signup.go()
        signup.addBalance()
        signup.submit()
        signup.requiredFields()
     })
     it('Nome não informado', function () {
        signup.go()
        signup.fillform(this.register.blankName)
        signup.addBalance()
        signup.submit()
        signup.modalValidationName()
       

     })

    it('Senhas divergentes', function () {
        signup.go()
        signup.fillform(this.register.incorrectPassword)
        
        signup.addBalance()
        signup.submit()
        signup.incorrectPassword()
    })
    
    it('E-mail já cadastrado', function () {
        signup.go()
        signup.fillform(this.register.signup)
        signup.addBalance()
        signup.submit()
        signup.modalValidationEmail()
    })
})