import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', date: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', date: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            className="relative bg-neutral-900 border border-neutral-700 rounded-2xl p-8 w-full max-w-md"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">Записаться на замер</h2>
                <p className="text-neutral-400 mb-6">Замер бесплатный — приедем в удобное время</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label className="text-neutral-300">Ваше имя</Label>
                    <Input
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-neutral-300">Телефон</Label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-[#FF4D00]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-neutral-300">Удобная дата</Label>
                    <Input
                      required
                      type="date"
                      value={form.date}
                      onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                      className="bg-neutral-800 border-neutral-600 text-white focus:border-[#FF4D00]"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2 bg-[#FF4D00] hover:bg-[#e04400] text-white border-0"
                  >
                    Записаться
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-[#FF4D00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={32} className="text-[#FF4D00]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                <p className="text-neutral-400 mb-6">Свяжемся с вами в ближайшее время для подтверждения замера</p>
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="border-neutral-600 text-neutral-300 hover:text-white"
                >
                  Закрыть
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
