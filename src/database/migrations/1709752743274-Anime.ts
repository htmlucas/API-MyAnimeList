
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Anime1709752743274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'Anime',
                columns: [
                    {
                        name:'id',
                        type: 'string',
                        isPrimary: true
                    },
                    {
                        name: 'img',
                        type: 'string',
                        isNullable: true
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
        await queryRunner.dropTable('Anime')
    }

}
