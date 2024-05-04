import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Categories1709753323713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'Categories',
                columns:[
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'string',
                        isNullable: false                     
                    },
                    {
                        name: 'description',
                        type: 'string',
                        isNullable: false                     
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Categories')
    }

}
