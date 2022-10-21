import { Request, Response } from "express";
import { websiteName } from "../../constants";
import { get24HoursFeedData, getAccountsStatsData, getWhalesData } from "../services/api";
import { convertPriceToPrintedValue, numberWithCommas } from "../services/helpers/helper";
import { getTimeAgoStringFromEpoch } from "../services/helpers/timeHelper";

export const accountsPage = async (req: Request, res: Response) => {
    const dataFor24HoursFeed = get24HoursFeedData();
    const allWhalesData = getWhalesData();
    const { totalWhalesNumber, dataForWhalesBar } = allWhalesData;
    const accountsInformation = getAccountsStatsData();
    const { accountsWallets, accountsStatsData } = accountsInformation;

    const variablesObject = {
        websiteName: websiteName,
        browserTitle: `Accounts | ${websiteName}`,
        pageTitle: `Accounts`,
        accountsWallets,
        accountsStatsData,
        convertPriceToPrintedValue,
        getTimeAgoStringFromEpoch,
        numberWithCommas,
        dataFor24HoursFeed,
        dataForWhalesBar,
        totalWhalesNumber
    }

    res.render("./accounts/accounts", variablesObject)
}