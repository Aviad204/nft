import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const timeAgoConvertor = new TimeAgo('en-US')

export const getTimeAgoStringFromEpoch = (epochTime: number) => {
    const timeNow: number = new Date().valueOf();
    const different: number = timeNow - epochTime;
    return timeAgoConvertor.format(timeNow - different);
}
