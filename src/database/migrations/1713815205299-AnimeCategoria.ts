import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AnimeCategoria1713815205299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'AnimeCategoria',
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    isPrimary: true
                },
                {
                    name: 'categoria_id',
                    type: 'string'
                },
                {
                    name: 'anime_id',
                    type: 'string'
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['categoria_id'],
                    referencedTableName: 'Categories',
                    referencedColumnNames: ['id'],
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
        await queryRunner.dropTable('AnimeCategoria')
    }

}
