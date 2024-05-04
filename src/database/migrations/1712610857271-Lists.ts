import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Lists1712610857271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'Lists',
                columns: [
                    {
                        name:'id_lists',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name:'user_id',
                        type: 'string',
                        isNullable: false 

                    },
                    {
                        name:'name',
                        type: 'string',
                        isNullable: false 

                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
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
        await queryRunner.dropTable('Lists')
    }

}
