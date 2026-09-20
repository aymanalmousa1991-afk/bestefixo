export function Wordmark({ size = 'md', className = '' }) {
  const sizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl', xl: 'text-3xl' }
  return (
    <span className={`font-display font-bold tracking-tight ${sizes[size]} ${className}`}>
      <span className="text-brand-blue">Beste</span><span className="text-brand-green">Fixo</span>
    </span>
  )
}

export default Wordmark
