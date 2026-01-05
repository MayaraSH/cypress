describe('Agenda de Contatos - EBAC', () => {
    
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve renderizar os campos de entrada do formulário', () => {
        cy.get('input[type="text"]').should('be.visible')
        cy.get('input[type="email"]').should('be.visible')
        cy.get('input[type="tel"]').should('be.visible')
    })

    it('Deve incluir um novo contato com sucesso', () => {
        cy.get('input[type="text"]').type('João Silva')
        cy.get('input[type="email"]').type('joao.silva@email.com')
        cy.get('input[type="tel"]').type('11987654321')
        
        cy.contains('button', 'Adicionar').click()
        
        cy.contains('João Silva').should('be.visible')
        cy.contains('11987654321').should('be.visible')
        cy.contains('joao.silva@email.com').should('be.visible')
    })

    it('Deve alterar um contato existente', () => {
        cy.get('input[type="text"]').type('Maria Santos')
        cy.get('input[type="email"]').type('maria.santos@email.com')
        cy.get('input[type="tel"]').type('11912345678')
        cy.contains('button', 'Adicionar').click()
        
        cy.contains('Maria Santos').should('be.visible')
    
        cy.get('.edit').last().click()
        
        cy.get('input[type="text"]').clear().type('Maria Santos Silva')
        cy.get('input[type="email"]').clear().type('maria.silva@email.com')
        cy.get('input[type="tel"]').clear().type('11999887766')
        
        cy.get('button[type="submit"]').click()
        
        cy.contains('Maria Santos Silva').should('be.visible')
        cy.contains('11999887766').should('be.visible')
        cy.contains('maria.silva@email.com').should('be.visible')
    })

    it('Deve remover um contato da lista', () => {
        cy.get('input[type="text"]').type('Pedro Oliveira')
        cy.get('input[type="email"]').type('pedro.oliveira@email.com')
        cy.get('input[type="tel"]').type('11955443322')
        cy.contains('button', 'Adicionar').click()
        
        cy.contains('Pedro Oliveira').should('be.visible')
        
        cy.get('.delete').last().click()
        
        cy.contains('Pedro Oliveira').should('not.exist')
        cy.contains('11955443322').should('not.exist')
        cy.contains('pedro.oliveira@email.com').should('not.exist')
    })

    it('Deve incluir múltiplos contatos', () => {
        cy.get('input[type="text"]').type('Ana Costa')
        cy.get('input[type="email"]').type('ana.costa@email.com')
        cy.get('input[type="tel"]').type('11911112222')
        cy.contains('button', 'Adicionar').click()
        
        cy.get('input[type="text"]').type('Carlos Lima')
        cy.get('input[type="email"]').type('carlos.lima@email.com')
        cy.get('input[type="tel"]').type('11933334444')
        cy.contains('button', 'Adicionar').click()
        
        cy.contains('Ana Costa').should('be.visible')
        cy.contains('Carlos Lima').should('be.visible')
    })

    })