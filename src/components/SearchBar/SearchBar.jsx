import styles from './SearchBar.module.css'

function SearchBar({ filters, onFilterChange, classifications, cultures, departments }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar por título o autor..."
        value={filters.query}
        onChange={e => onFilterChange('query', e.target.value)}
        className={styles.input}
      />
      <div className={styles.selects}>
        <select
          value={filters.classification}
          onChange={e => onFilterChange('classification', e.target.value)}
          className={styles.select}
        >
          <option value="">Todas las clasificaciones</option>
          {classifications.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={filters.culture}
          onChange={e => onFilterChange('culture', e.target.value)}
          className={styles.select}
        >
          <option value="">Todas las culturas</option>
          {cultures.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={filters.department}
          onChange={e => onFilterChange('department', e.target.value)}
          className={styles.select}
        >
          <option value="">Todos los departamentos</option>
          {departments.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
          value={filters.sort}
          onChange={e => onFilterChange('sort', e.target.value)}
          className={styles.select}
        >
          <option value="">Ordenar por fecha</option>
          <option value="asc">Fecha ascendente</option>
          <option value="desc">Fecha descendente</option>
        </select>
      </div>

      <div className={styles.dateRange}>
        <input
          type="number"
          placeholder="Año desde..."
          value={filters.yearFrom}
          onChange={e => onFilterChange('yearFrom', e.target.value)}
          className={styles.yearInput}
        />
        <span className={styles.dateSeparator}>—</span>
        <input
          type="number"
          placeholder="Año hasta..."
          value={filters.yearTo}
          onChange={e => onFilterChange('yearTo', e.target.value)}
          className={styles.yearInput}
        />
      </div>
    </div>
  )
}

export default SearchBar