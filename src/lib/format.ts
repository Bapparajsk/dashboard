export const dateFormat = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);
    if (diffInSeconds < 60) {
        return "just now";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} minute ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hour ago`;
    } else if (diffInDays < 7) {
        return `${diffInDays} day ago`;
    } else if (diffInWeeks < 4) {
        return `${diffInWeeks} week ago`;
    } else if (diffInMonths < 12) {
        return `${diffInMonths} month ago`;
    } else {
        return `${diffInYears} year ago`;
    }
};
