import prismaClient from "../../../prisma";

class SessionAppleService {
    async execute(version: string) {
        const current_version = 6

        if (parseInt(version) === current_version) {
            const appleTestJson = {
                success: true,
                sessionID: '974ebe39a1af75a9be4097abced3e3f8'
            }

            return appleTestJson;
        } else {
            const appleTestJson = {
                success: false,
                sessionID: '974ebe39a1af75a9be4097abced3e3f8',
            }

            return appleTestJson;
        }

    }
}

export { SessionAppleService };