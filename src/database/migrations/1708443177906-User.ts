import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1708443177906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'Users',
                columns:[
                    {
                        name:'id_user',
                        type:'string',
                        isPrimary: true
                    },
                    {
                        name: 'img',
                        type: 'string',
                        isNullable: true
                    },
                    {
                        name:'nickname',
                        type:'string',
                        isNullable: false
                    },
                    {
                        name:'email',
                        type:'string',
                        isNullable: false,
                        isUnique:true
                    },
                    {
                        name:'password',
                        type:'string',
                        isNullable:false
                    },
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users')
    }

}
