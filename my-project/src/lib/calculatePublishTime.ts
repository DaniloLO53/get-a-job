export function calculatePublishTime(date: Date): string {
  const now = new Date();
  const delta = now.getTime() - date.getTime();

  const minutes = Math.floor(delta / 60000);

  if (minutes < 1) {
    return "Agora";
  } else if (minutes < 60) {
    return minutes + "min";
  } else if (minutes < 1440) { // Menos de 1 dia (24 horas)
    const horas = Math.floor(minutes / 60);
    return horas + "h";
  } else if (minutes < 10080) { // Menos de 1 semana (7 dias)
    const dias = Math.floor(minutes / 1440);
    return dias + "d";
  } else if (minutes < 43200) { // Menos de 1 mês (30 dias)
    const semanas = Math.floor(minutes / 10080);
    return semanas + "sem";
  } else {
    return "Mais de 1 mês";
  }
}