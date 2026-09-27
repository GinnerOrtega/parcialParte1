const descripcionesEspecialidades = {
    neural: "La Terapia Neural regula el sistema nervioso mediante la aplicación de anestésicos locales en puntos específicos, ayudando a aliviar dolores crónicos y bloqueos energéticos.",
    quiropraxia: "La Quiropraxia se enfoca en el diagnóstico y tratamiento manual de problemas de la columna vertebral y el sistema musculoesquelético.",
    fisioterapia: "La Fisioterapia utiliza ejercicios, movilizaciones y agentes físicos para prevenir, tratar y rehabilitar lesiones y enfermedades del movimiento.",
    nutricion: "La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados para tratar enfermedades y mejorar la calidad de vida de los pacientes."
};

document.addEventListener('DOMContentLoaded', () => {
    const enlacesEspecialidad = document.querySelectorAll('.especialidad-link');
    const cajaDescripcion = document.getElementById('descripcionEspecialidad');

    enlacesEspecialidad.forEach((enlace) => {
        enlace.addEventListener('click', (evento) => {
            evento.preventDefault();

            enlacesEspecialidad.forEach((el) => el.classList.remove('active'));
            enlace.classList.add('active');

            const clave = enlace.getAttribute('data-especialidad');
            const texto = descripcionesEspecialidades[clave];

            cajaDescripcion.textContent = texto;
            cajaDescripcion.classList.remove('d-none');
        });
    });
});
