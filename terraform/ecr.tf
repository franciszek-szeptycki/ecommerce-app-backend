resource "aws_ecr_repository" "docker_repository" {
  name = "ecommerce-backend-repository"

  image_tag_mutability = "IMMUTABLE"

  encryption_configuration {
    encryption_type = "KMS"
  }

  image_scanning_configuration {
    scan_on_push = true
  }
}