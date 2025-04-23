using System.ComponentModel.DataAnnotations;

namespace App.Models
{
    public class Paciente
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; } = string.Empty;

        [Required]
        public string Cpf { get; set; } = string.Empty;

        public DateTime DataNascimento { get; set; }

        public ICollection<Consulta>? Consultas { get; set; }
    }
}