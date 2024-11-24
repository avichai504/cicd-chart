import {
  faCheckDouble,
  faTriangleExclamation,
  faHourglassHalf,
  faArrowRotateLeft,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons'

const categoryStyles = {
  prob: {
    cls: 'bg-red-100 text-red-700',
    icon: { name: faTriangleExclamation, clr: 'bg-red-700' },
  },
  bgtReq: {
    cls: 'bg-yellow-100 text-yellow-700',
    icon: { name: faHandHoldingDollar, clr: 'bg-yellow-800' },
  },
  waiting: {
    cls: 'bg-blue-100 text-blue-700',
    icon: { name: faHourglassHalf, clr: 'bg-blue-700' },
  },
  skipped: {
    cls: 'bg-gray-100 text-gray-700',
    icon: { name: faArrowRotateLeft, clr: 'bg-gray-700' },
  },
  completed: {
    cls: 'bg-green-100 text-green-700',
    icon: { name: faCheckDouble, clr: 'bg-green-700' },
  },
}

export default categoryStyles
