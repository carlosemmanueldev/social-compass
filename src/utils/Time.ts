export function formatRelativeTime(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
  
    const timeDifferenceInMilliseconds = now.getTime() - date.getTime();
    const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;
    const timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
    const timeDifferenceInHours = timeDifferenceInMinutes / 60;
    const timeDifferenceInDays = timeDifferenceInHours / 24;
  
    if (timeDifferenceInDays >= 1) {
      const daysAgo = Math.floor(timeDifferenceInDays);
      return daysAgo === 1 ? '1 dia atrás' : `${daysAgo} dias atrás`;
    } else if (timeDifferenceInHours >= 1) {
      const hoursAgo = Math.floor(timeDifferenceInHours);
      return hoursAgo === 1 ? '1 hora atrás' : `${hoursAgo} horas atrás`;
    } else if (timeDifferenceInMinutes >= 1) {
      const minutesAgo = Math.floor(timeDifferenceInMinutes);
      return minutesAgo === 1 ? '1 minuto atrás' : `${minutesAgo} minutos atrás`;
    } else {
      return 'just now';
    }
}

export function formatDate(dataString: string): string {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${dia} de ${mes} de ${ano}`;
}