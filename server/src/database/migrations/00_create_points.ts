import Knex from 'knex';

export async function up(knex: Knex) {
 
    // CRIAR A TABELA 
   return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('City').notNullable();
        table.string('uf').notNullable();

   });

}

export async function down(knex: Knex) {
    // VOLTAR A ATRÁS (DELETAR  A TBELA)
   return knex.schema.dropTable('point');
}