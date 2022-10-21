import { accountsStatsData, accountsWallets, dataFor24HourFeed, dataForWhalesBar, totalWhalesNumber } from "./fakeData/fakeData"

// 
// Accounts
// 
export const getAccountsStatsData = () => {
    // Faking server call, this function will be async and will handle the call from the db to get all the needed user data.
    return {
        accountsStatsData,
        accountsWallets
    }
}

export const get24HoursFeedData = () => {
    // Faking server call, this function will be async and will handle the call from the db to get all the needed user data.
    return dataFor24HourFeed;

}

export const getWhalesData = () => {
    // Faking server call, this function will be async and will handle the call from the db to get all the needed user data.
    return {
        dataForWhalesBar,
        totalWhalesNumber
    }
}
