document.addEventListener('DOMContentLoaded', function () {
     const tableContainer = document.getElementById('table');
    const contentTable = document.getElementById('content-table');
    const paginationContainer = document.getElementById('buttons');
    const firstBtn = document.getElementById('first-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const lastBtn = document.getElementById('last-btn');
    const pageInfo = document.getElementById('page-info');
  
    const itemsPerPage = 10; 
    const totalPages = 5; 
    let currentPage = 1;
  
    function generateTableContent(page) {
      
      contentTable.innerHTML = '';
  
      
      const startIdx = (page - 1) * itemsPerPage + 1;
      const endIdx = Math.min(page * itemsPerPage, totalPages * itemsPerPage);
      for (let i = startIdx; i <= endIdx; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = `Row ${i}`;
        row.appendChild(cell);
        contentTable.appendChild(row);
      }
    }
  
    
    function updatePaginationControls() {
      pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
      firstBtn.disabled = currentPage === 1;
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
      lastBtn.disabled = currentPage === totalPages;
    }
  
 
    generateTableContent(currentPage);
    updatePaginationControls();
  
    
    firstBtn.addEventListener('click', function () {
      currentPage = 1;
      generateTableContent(currentPage);
      updatePaginationControls();
    });
  
    prevBtn.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        generateTableContent(currentPage);
        updatePaginationControls();
      }
    });
  
    nextBtn.addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage++;
        generateTableContent(currentPage);
        updatePaginationControls();
      }
    });
  
    lastBtn.addEventListener('click', function () {
      currentPage = totalPages;
      generateTableContent(currentPage);
      updatePaginationControls();
    });
  });