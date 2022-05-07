const stringifDate=(date)=>{
    const option={day:'numeric', month: 'short', year: 'numeric'};
    const newDate=!date?"undefined": newDate(Date.parse(date)).toLocalDateString('en-GB', option);
    return newDate;
}