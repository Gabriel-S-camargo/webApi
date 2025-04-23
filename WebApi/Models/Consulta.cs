using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace App.Models
{
    public class Consulta
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime DataHora { get; set; }

        [ForeignKey("Paciente")]
        public int PacienteId { get; set; }
        public Paciente? Paciente { get; set; }

        [ForeignKey("Medico")]
        public int MedicoId { get; set; }
        public Medico? Medico { get; set; }
    }
}