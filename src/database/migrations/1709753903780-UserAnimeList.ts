import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserAnimeList1709753903780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable(new Table({
            name: 'UserAnimeList',
            columns: [
                {
                    name: 'id_useranimelist',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'id_lists',
                    type: 'string'
                },
                {
                    name: 'anime_id',
                    type: 'string'
                },
                {
                    name: 'date_added',
                    type: 'datetime',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'rating',
                    type: 'integer',
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['id_lists'],
                    referencedTableName: 'Lists',
                    referencedColumnNames: ['id_lists'],
                    onDelete: 'CASCADE'
                },
                {
                    columnNames: ['anime_id'],
                    referencedTableName: 'Anime',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('UserAnimeList')
    }

}
