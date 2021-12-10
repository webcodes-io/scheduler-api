import { queryResponseData } from "../../mocks/mock";

const dbService: any = jest.createMockFromModule('./init');
dbService.init = () => ({
    query: () => ({
        rows: [queryResponseData]
    })
});
export default dbService;
