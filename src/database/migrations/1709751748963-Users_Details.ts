import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersDetails1709751748963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Users_details',
                columns: [
                    {
                        name:'id',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name:'user_id',
                        type: 'string',
                        isNullable: false 

                    },
                    {
                        name:'cep',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name:'cidade',
                        type: 'string',
                        isNullable: true
                    },
                    {
                        name:'estado',
                        type: 'string', 
                        isNullable: true                       
                    },
                    {
                        name:'pais',
                        type: 'string',
                        isNullable:true
                    },
                    {
                        name:'bio',
                        type: 'string',
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ['user_id'],
                        referencedTableName: 'Users', // Nome da tabela referenciada
                        referencedColumnNames: ['id_user'], // Nome da coluna referenciada
                        onDelete: 'CASCADE' // Define a ação de cascata para exclusão, se necessário
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users_details')
    }

}
