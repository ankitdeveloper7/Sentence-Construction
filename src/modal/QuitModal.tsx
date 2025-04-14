import React from 'react';
import { Dialog } from '@headlessui/react';

interface Props {
  isModalOpen: boolean;
  onClose: () => void;
}

export default function QuitModal({ isModalOpen, onClose }: Props) {

    function handleclick(){
        {window.open("/", "_self")}
    }
  return (
    <Dialog open={isModalOpen} onClose={onClose} className="relative z-50">
      {/* Soft transparent background */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity" aria-hidden="true" />

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-center shadow-xl transition-all">
            <p className="text-lg font-medium">Are you sure you want to quit?</p>
            <p className="text-sm text-gray-500 mt-1">None of your answers will be saved.</p>

            <div className="mt-5 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="border border-gray-400 rounded-lg px-4 py-1 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleclick}
                className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-1"
              >
                Quit
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
