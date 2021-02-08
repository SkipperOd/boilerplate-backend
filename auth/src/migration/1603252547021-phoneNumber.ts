import {MigrationInterface, QueryRunner} from "typeorm";

export class phoneNumber1603252547021 implements MigrationInterface {
    name = 'phoneNumber1603252547021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "__profile" ADD "phoneNumber" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "__profile" DROP COLUMN "phoneNumber"`);
    }

}
