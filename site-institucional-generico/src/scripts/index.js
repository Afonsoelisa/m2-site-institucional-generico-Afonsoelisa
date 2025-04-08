document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModal = document.getElementById("openModal");
    const openModalFAQ = document.getElementById("openModalFAQ");
    const closeModal = document.getElementById("closeModal");
    const modalOverlay = document.getElementById("modalOverlay"); // Seleciona o overlay
  
    // Função para abrir o modal e ativar o overlay
    function openModalFunc() {
      modal.style.display = "flex"; // Mostra o modal
      modalOverlay.style.display = "block"; // Ativa o overlay
    }
  
    // Função para fechar o modal e desativar o overlay
    function closeModalFunc() {
      modal.style.display = "none"; // Esconde o modal
      modalOverlay.style.display = "none"; // Desativa o overlay
    }
  
    openModal.addEventListener("click", openModalFunc);
    openModalFAQ.addEventListener("click", openModalFunc);
    closeModal.addEventListener("click", closeModalFunc);
  
    // Fechar o modal ao clicar fora dele
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModalFunc();
      }
    });
  
    // Fechar modal ao clicar no overlay
    modalOverlay.addEventListener("click", closeModalFunc);
  });
  