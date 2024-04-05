terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

terraform {
  backend "local" {
    path = ".terraform.tfstate"
  }
}

provider "aws" {
  region = var.aws_region
}
