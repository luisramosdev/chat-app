
export const formatDate = messageDate => {
    const date = new Date(messageDate);

    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let time = hour + ':' + minutes;

    const option = {
        month: 'long',
        day: 'numeric'
    };

    const newDate = date.toLocaleDateString('es-MX', option);

    return newDate + ' - ' + time;
}