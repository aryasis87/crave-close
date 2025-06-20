'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, Lock, X } from 'lucide-react'

const initialCart = [
  { id: 1, name: 'Velvet Pulse Wand', price: 149, quantity: 1, image: '/images/p4.jpg' },
  { id: 2, name: 'Silken Lube Noir', price: 39, quantity: 2, image: '/images/p3.jpg' },
]

export default function CheckoutPage() {
  const [cart, setCart] = useState(initialCart)

  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    )
  }

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 12
  const total = subtotal + shipping

  return (
    <section className="bg-white text-zinc-900 py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
        {/* 🛒 Cart Area */}
        <div className="lg:col-span-2 space-y-10">
          <h2 className="text-4xl font-serif font-semibold">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-zinc-500">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-zinc-200 pb-8"
              >
                <div className="relative w-full md:w-36 h-52 md:h-36 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-400 hover:text-red-500 transition"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="text-zinc-500 text-sm">Luxury Edition</div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, 'decrease')}
                        className="w-8 h-8 border border-zinc-300 rounded hover:border-zinc-600 flex items-center justify-center"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 'increase')}
                        className="w-8 h-8 border border-zinc-300 rounded hover:border-zinc-600 flex items-center justify-center"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-lg font-semibold text-zinc-700">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 💳 Summary */}
        <div className="sticky top-28 self-start bg-zinc-50 border border-zinc-200 rounded-2xl p-8 shadow-md space-y-6">
          <h3 className="text-xl font-serif font-semibold mb-4">Order Summary</h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between text-zinc-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-base text-zinc-900 font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-xl transition-all duration-300 shadow">
            Continue to Payment
          </button>

          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-3">
            <Lock size={14} className="text-zinc-500" />
            Encrypted & secure checkout
          </div>
        </div>
      </div>
    </section>
  )
}
